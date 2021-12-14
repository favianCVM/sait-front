import { Box, Flex, Center } from "@chakra-ui/react";
import { Formik, Form } from "formik";
import {
  profileCreationValidations,
  profileUpdateValidations,
} from "@utils/validations";
import {
  DateField,
  TextField,
  SelectField,
  SubmitFormButton,
  FileField,
} from "@components/common";
import User from "@models/user";
import {FaUserAlt} from "react-icons/fa"

const UserForm = ({ handleSubmit, updateUser }) => {
  const setIntialProps = (type) => {
    if (type === "initialValues") {
      if (updateUser) return updateUser;
      else return User;
    } else if (type === "validate") {
      if (updateUser) return profileUpdateValidations;
      else return profileCreationValidations;
    }
  };

  return (
    <Formik
      initialValues={setIntialProps("initialValues")}
      onSubmit={handleSubmit}
      validate={setIntialProps("validate")}
    >
      {(props) => (
        <Form>
          <Flex flexDirection="column" w="100%">
            <Box className="grid md:place-content-center md:place-items-center md:grid-cols-3 md:gap-x-6 md:gap-y-5">
              <TextField
                name="first_name"
                id="first_name"
                placeholder="nombre"
                size="md"
                showError={false}
                disabled={props.isSubmitting}
                label="Nombre"
              />

              <TextField
                name="last_name"
                id="last_name"
                placeholder="apellido"
                size="md"
                showError={false}
                disabled={props.isSubmitting}
                label="Apellido"
              />

              <TextField
                name="email"
                id="email"
                placeholder="email"
                type="email"
                size="md"
                showError={false}
                disabled={props.isSubmitting}
                label="Email"
              />

              {!updateUser && (
                <TextField
                  name="password"
                  id="password"
                  placeholder="contraseña"
                  type="password"
                  size="md"
                  showError={false}
                  disabled={props.isSubmitting}
                  label="Contraseña"
                />
              )}

              <TextField
                name="dni"
                id="dni"
                placeholder="dni"
                size="md"
                showError={false}
                disabled={props.isSubmitting}
                label="DNI"
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
                label="Sexo"
              />

              {!updateUser && (
                <SelectField
                  options={[
                    { label: "Admin", value: 60 },
                    { label: "Usuario", value: 50 },
                  ]}
                  name="role"
                  id="role"
                  placeholder="rol"
                  disabled={props.isSubmitting}
                  label="Rol"
                />
              )}

              <DateField
                name="birth_date"
                id="birth_date"
                placeholder="fecha de nacimiento"
                maxDate={new Date()}
                disabled={props.isSubmitting}
                label="Fecha de nacimiento"
              />
            </Box>
          </Flex>

          <FileField
            name=""
            containerClasses="mt-12 mb-8"
            imagePreviewSize="xl"
            toolTipMessage="Foto de perfil"
            id="image__"
            labelIcon={<FaUserAlt/>}
            disabled={props.isSubmitting}
            helperText=""
            label=""
          />

          <Center>
            <SubmitFormButton
              isSubmitting={props.isSubmitting}
              errors={props.errors}
              title={updateUser ? "Actualizar perfil" : "Crear perfil"}
            />
          </Center>
        </Form>
      )}
    </Formik>
  );
};

export default UserForm;
