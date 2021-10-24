import {
  Stack,
  Button,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
  ListItem,
  UnorderedList,
} from "@chakra-ui/react";
import TextField from "@components/common/TextField";
import { FaBullseye } from "react-icons/fa";
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
          <Stack spacing={3}>
            <TextField
              placeholder="correo electronico"
              size="md"
              id="email"
              name="email"
              type="email"
              helperText="introduzca correo electronico"
            />

            <TextField
              placeholder="contrasenna"
              size="md"
              id="password"
              name="password"
              type="password"
              helperText="introduzca contrasenna"
            />

            <Popover>
              <PopoverTrigger>
                <Button
                  colorScheme="blue"
                  type="submit"
                  isLoading={props.isSubmitting}
                  rightIcon={<FaBullseye />}
                >
                  Iniciar
                </Button>
              </PopoverTrigger>
              {Object.keys(props.errors).length > 0 && (
                <PopoverContent>
                  <PopoverArrow />
                  <PopoverCloseButton />
                  <PopoverHeader>Tienes errores</PopoverHeader>
                  <PopoverBody className="flex flex-col items-start">
                    <UnorderedList>
                      {Object.keys(props.errors).map((err) => (
                        <ListItem>{props.errors[err]}</ListItem>
                      ))}
                    </UnorderedList>
                  </PopoverBody>
                </PopoverContent>
              )}
            </Popover>
          </Stack>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
