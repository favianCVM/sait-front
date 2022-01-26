import { Stack, Flex } from "@chakra-ui/react";
import { Formik, Form } from "formik";
import { deviceRegisterValidations } from "@utils/validations";
import {
  AutosuggestField,
  SelectField,
  TextField,
  SubmitFormButton,
  MultiSelectField,
} from "@components/common";
import device from "@models/device";

const DeviceForm = ({
  handleSubmit,
  updateDevice,
  components = [],
  deviceTypes = [],
}) => {
  return (
    <Formik
      initialValues={updateDevice ? updateDevice : device}
      onSubmit={handleSubmit}
      // validate={deviceRegisterValidations}
    >
      {(props) => (
        <Form>
          <Flex flexDirection="column" w="100%">
            <Stack>
              <SelectField
                options={[
                  { label: "Otro", value: "new" },
                  ...deviceTypes.map((el) => ({
                    value: el.id,
                    label: el.name,
                  })),
                ]}
                name="deviceTypeId"
                id="device_type_id"
                placeholder="tipo de equipo"
                label="Tipo de equipo"
                disabled={props.isSubmitting}
              />

              {props.values?.deviceTypeId === "new" && (
                <TextField
                  name="deviceType.name"
                  id="device_type.name"
                  label="Nombre del tipo de equipo"
                  disabled={props.isSubmitting}
                  placeholder="introduzca el nombre del tipo de equipo"
                />
              )}
              
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
                placeholder="introduzca el serial del equipo"
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
