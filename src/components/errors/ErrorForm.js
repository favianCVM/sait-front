import {
  Stack,
  Box,
  Flex,
} from "@chakra-ui/react";
import { Formik, Form } from "formik";
import { incidenceValidations } from "@utils/validations";
import {
  DateField,
  TextareaField,
  SelectField,
  AutosuggestField,
  TextField,
  SubmitFormButton,
} from "@components/common";
import incidence from "@models/incidence";

const ErrorForm = ({ handleSubmit, isAdmin = false }) => {
  return (
    <Formik
      initialValues={incidence}
      onSubmit={handleSubmit}
      validate={incidenceValidations}
    >
      {(props) => (
        <Form>
          <Flex flexDirection="column" w="100%">
            <Stack>
              {isAdmin && (
                <AutosuggestField
                  label="Perfil"
                  //options={users.map((el) => el.label)}
                  data={users}
                  name="user"
                  placeholder="seleccione un perfil"
                  disabled={props.isSubmitting}
                />
              )}

              <SelectField
                label="Prioridad"
                name="priority"
                placeholder="seleccione una prioridad"
                disabled={props.isSubmitting}
                options={priorities}
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

              <DateField
                id="date"
                name="date"
                maxDate={new Date()}
                disabled={props.isSubmitting}
                addClass="pt-5"
                label="Fecha de incidencia"
              />
            </Stack>
          </Flex>

          <SubmitFormButton
            isSubmitting={props.isSubmitting}
            errors={props.errors}
            title={"Crear falla"}
          />
        </Form>
      )}
    </Formik>
  );
};

export default ErrorForm;
