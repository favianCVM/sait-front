import {
  Stack,
  Button,
  Box,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
  ListItem,
  UnorderedList,
  Flex,
  Grid,
} from "@chakra-ui/react";
import { Formik, Form } from "formik";
import { userCreationValidations } from "@utils/validations";
import {
  AutocompleteSelect,
  DateField,
  SelectMenu,
  TextareaField,
  TextField
} from "@components/common";

const countries = [
  { value: "ghana", label: "Ghana" },
  { value: "nigeria", label: "Nigeria" },
  { value: "kenya", label: "Kenya" },
  { value: "southAfrica", label: "South Africa" },
  { value: "unitedStates", label: "United States" },
  { value: "canada", label: "Canada" },
  { value: "germany", label: "Germany" },
];

const UserForm = ({ handleSubmit }) => {
  return (
    <Formik
      initialValues={{
        name: "",
        last_name: "",
        password: "",
        email: "",
        dni: "",
        role: 0,
        sex: "",
        birth_date: new Date(),
      }}
      onSubmit={(values) => {
        console.log(values);
      }}
      validate={userCreationValidations}
    >
      {(props) => (
        <Form>
          <Flex flexDirection="column" w="100%">
            <Box 
              className="grid place-content-center place-items-center grid-cols-3 gap-x-6 gap-y-5"
            >
              <TextField
                name="name"
                id="name"
                placeholder="Nombre"
                size="md"
                showError={false}
                disabled={props.isSubmitting}
              />

              <TextField
                name="last_name"
                id="last_name"
                placeholder="Apellido"
                size="md"
                showError={false}
                disabled={props.isSubmitting}
              />

              <TextField
                name="email"
                id="email"
                placeholder="email"
                type="email"
                size="md"
                showError={false}
                disabled={props.isSubmitting}
              />

              <TextField
                name="password"
                id="password"
                placeholder="Contrasenna"
                type="password"
                size="md"
                showError={false}
                disabled={props.isSubmitting}
              />

              <TextField
                name="dni"
                id="dni"
                placeholder="DNI"
                size="md"
                showError={false}
                disabled={props.isSubmitting}
              />

              <SelectMenu
                listItems={[
                  { name: "Masculino", value: "M" },
                  { name: "Femenino", value: "F" },
                ]}
                name="sex"
                id="sex"
                placeholder="Sexo"
                disabled={props.isSubmitting}
              />

              <SelectMenu
                listItems={[
                  { name: "Admin", value: 60 },
                  { name: "Usuario", value: 50 },
                ]}
                name="role"
                id="role"
                placeholder="Rol"
                disabled={props.isSubmitting}
              />

              <DateField
                name="birth_date"
                maxDate={new Date()}
                disabled={props.isSubmitting}
              />
            </Box>

            <Popover>
              <PopoverTrigger>
                <Button
                  mx="auto"
                  mt={4}
                  w={32}
                  colorScheme="blue"
                  type="submit"
                  isLoading={props.isSubmitting}
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
          </Flex>
        </Form>
      )}
    </Formik>
  );
};

export default UserForm;
