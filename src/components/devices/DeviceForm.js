import { Stack, Flex } from "@chakra-ui/react";
import { Formik, Form } from "formik";
import { deviceRegisterValidations } from "@utils/validations";
import {
  AutosuggestField,
  TextField,
  SubmitFormButton,
  MultiSelectField,
} from "@components/common";
import device from "@models/device";

const DeviceForm = ({
  handleSubmit,
  users = [],
  updateDevice,
  components = [],
}) => {
  return (
    <Formik
      initialValues={updateDevice ? updateDevice : device}
      onSubmit={handleSubmit}
      validate={deviceRegisterValidations}
    >
      {(props) => (
        <Form>
          <Flex flexDirection="column" w="100%">
            <Stack>
              <AutosuggestField
                data={users.map((el) => ({
                  label: `${el.first_name} #${el.id}`,
                  value: el.id,
                }))}
                name="user_id"
                placeholder="seleccione un usuario propietario"
                disabled={props.isSubmitting}
                label="Usuario propietario"
              />

              <MultiSelectField
                options={components.map((el) => ({
                  value: el.id,
                  label: el.name,
                }))}
                name="components"
                id="components"
                placeholder="componentes"
                label="Componentes"
                disabled={props.isSubmitting}
              />

              <TextField
                placeholder="serial del equipo"
                size="md"
                id="serial"
                name="serial"
                disabled={props.isSubmitting}
                label="Serial"
              />
            </Stack>
            
            <SubmitFormButton
              errors={props.errors}
              title={updateDevice ? "Actualizar equipo" : "Registrar equipo"}
              isSubmitting={props.isSubmitting}
            />
          </Flex>
        </Form>
      )}
    </Formik>
  );
};

export default DeviceForm;
