import {
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
} from "@chakra-ui/react";
import { Formik, Form } from "formik";
import { profileCreationValidations } from "@utils/validations";
import {
  DateField,
  TextField,
  SelectField,
} from "@components/common";
import Profile from '@models/profile' 


const UserForm = ({ handleSubmit, updateProfile }) => {

  const setIntialValues = () => {
    if(updateProfile) return updateProfile
    else return Profile
  }

  return (
    <Formik
      initialValues={setIntialValues()}
      onSubmit={handleSubmit}
      validate={profileCreationValidations}
    >
      {(props) => (
        <Form>
          <Flex flexDirection="column" w="100%">
            <Box 
              className="grid md:place-content-center md:place-items-center md:grid-cols-3 md:gap-x-6 md:gap-y-5"
            >
              <TextField
                name="first_name"
                id="first_name"
                placeholder="nombre"
                size="md"
                showError={false}
                disabled={props.isSubmitting}
              />

              <TextField
                name="last_name"
                id="last_name"
                placeholder="apellido"
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

              {
                !updateProfile && (
                  <TextField
                    name="password"
                    id="password"
                    placeholder="contraseña"
                    type="password"
                    size="md"
                    showError={false}
                    disabled={props.isSubmitting}
                  />
                )
              }

              <TextField
                name="dni"
                id="dni"
                placeholder="dni"
                size="md"
                showError={false}
                disabled={props.isSubmitting}
              />

              <SelectField
                options={[
                  { label: "Masculino", value: "M" },
                  { label: "Femenino", value: "F" },
                ]}
                name="sex"
                id="sex"
                placeholder="sexo"
                disabled={props.isSubmitting}
              />

              <SelectField
                options={[
                  { label: "Admin", value: 60 },
                  { label: "Usuario", value: 50 },
                ]}
                name="role"
                id="role"
                placeholder="rol"
                disabled={props.isSubmitting}
              />

              <DateField
                name="birth_date"
                id="birth_date"
                placeholder="fecha de nacimiento"
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
