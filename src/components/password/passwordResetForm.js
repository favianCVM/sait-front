import { Stack, Flex } from "@chakra-ui/react";
import { Formik, Form } from "formik";
import { passwordResetValidations } from "@utils/validations";
import {
  TextField,
  SubmitFormButton,
} from "@components/common";

const PasswordResetForm = ({ handleSubmit }) => {
  return (
    <Formik
      initialValues={{
        email: "",
      }}
      onSubmit={handleSubmit}
      validate={passwordResetValidations}
    >
      {(props) => (
        <Form>
          <Flex flexDirection="column" w="100%">
            <Stack>
              <TextField
                placeholder="introduzca su correo electronico"
                size="md"
                id="email"
                name="email"
                disabled={props.isSubmitting}
                label="Correo electronico"
                type="email"
              />
            </Stack>

            <SubmitFormButton
              errors={props.errors}
              title="enviar email de recuperacion"
              isSubmitting={props.isSubmitting}
            />
          </Flex>
        </Form>
      )}
    </Formik>
  );
};

export default PasswordResetForm;
