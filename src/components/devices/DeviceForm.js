import {
  Stack,
  Flex,
} from "@chakra-ui/react";
import { Formik, Form } from "formik";
import { deviceRegisterValidations } from "@utils/validations";
import {
  AutosuggestField,
  TextField,
  SubmitFormButton,
  MultiSelectField,
} from "@components/common";
import device from "@models/device";

const components = [
  {
    label: "ram",
    value: 0,
  },
  {
    label: "ssd",
    value: 1,
  },
  {
    label: "cpu",
    value: 2,
  },
];
const DeviceForm = ({ handleSubmit, profiles = [], updateDevice }) => {
  return (
    <Formik
      initialValues={device}
      onSubmit={handleSubmit}
      validate={deviceRegisterValidations}
    >
      {(props) => (
        <Form>
          <Flex flexDirection="column" w="100%">
            <Stack>
              <AutosuggestField
                data={profiles.map((el) => ({
                  label: `${el.first_name} #${el.id}`,
                  value: el.id,
                }))}
                name="profile_id"
                placeholder="seleccione un perfil"
                disabled={props.isSubmitting}
                label="Perfil"
              />

              <MultiSelectField
                options={components}
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
