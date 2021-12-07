import { Stack, Flex } from "@chakra-ui/react";
import { Formik, Form } from "formik";
import {componentRegisterValidations} from "@utils/validations";
import {
  TextareaField,
  TextField,
  SubmitFormButton,
} from "@components/common";
import component from "@models/component";

const ComponentForm = ({ handleSubmit, updateComponent }) => {
  return (
    <Formik
      initialValues={component}
      onSubmit={handleSubmit}
      // validate={componentRegisterValidations}
    >
      {(props) => (
        <Form>
          <Flex flexDirection="column" w="100%">
            <Stack>
              <TextField
                name="name"
                label="Nombre"
                placeholder="nombre"
                disabled={props.isSubmitting}
                id="name"
              />
              <TextField
                name="type"
                label="Tipo"
                placeholder="Tipo"
                disabled={props.isSubmitting}
                id="type"
              />

              <TextareaField
                name="description"
                id="description"
                placeholder="introduzca una descripción"
                size="md"
                showError={false}
                label="Descripción"
                disabled={props.isSubmitting}
              />
            </Stack>

            <SubmitFormButton
              isSubmitting={props.isSubmitting}
              errors={props.errors}
              title={
                updateComponent
                  ? "Actualizar componente"
                  : "Registrar componente"
              }
            />
          </Flex>
        </Form>
      )}
    </Formik>
  );
};

export default ComponentForm;
