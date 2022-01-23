import {
  Stack,
} from "@chakra-ui/react";
import { TextField, SubmitFormButton } from "@components/common";
import { Formik, Form } from "formik";
import { loginValidations } from "@utils/validations";

const LoginForm = ({ handleSubmit }) => {
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      onSubmit={handleSubmit}
      validate={loginValidations}
    >
      {(props) => (
        <Form>
          <Stack alignItems="center" spacing={5}>
            <TextField
              placeholder="correo electrónico"
              size="md"
              id="email"
              name="email"
              type="email"
              helperText="Introduzca su correo electrónico"
              disabled={props.isSubmitting}
            />

            <TextField
              placeholder="contraseña"
              size="md"
              id="password"
              name="password"
              type="password"
              helperText="Introduzca su contraseña"
              disabled={props.isSubmitting}
            />

            <SubmitFormButton 
              errors={props.errors}
              isSubmitting={props.isSubmitting}
              title="Iniciar sesión"
            />
          </Stack>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
