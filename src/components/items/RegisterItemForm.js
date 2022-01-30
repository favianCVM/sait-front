import { Stack, Flex } from "@chakra-ui/react";
import { Formik, Form } from "formik";
import { componentRegisterValidations } from "@utils/validations";
import {
  TextareaField,
  TextField,
  SubmitFormButton,
  FileField,
  SelectField,
} from "@components/common";
import component from "@models/component";
import { AiFillTool } from "react-icons/ai";

const RegisterItemForm = ({ handleSubmit, itemCategories = [] }) => {
  return (
    <Formik
      initialValues={{
        serial: "",
        item_category_id: null,
      }}
      onSubmit={handleSubmit}
      // validate={componentRegisterValidations}
    >
      {(props) => (
        <Form>
          <Flex flexDirection="column" w="100%">
            <Stack>
              <TextField
                name="serial"
                label="Serial"
                placeholder="serial"
                disabled={props.isSubmitting}
                id="serial"
              />

              <SelectField
                placeholder="Categoria"
                disabled={props.isSubmitting}
                label="Categoria"
                options={itemCategories}
              />
            </Stack>

            <SubmitFormButton
              isSubmitting={props.isSubmitting}
              errors={props.errors}
              title={"Registrar elemento"}
            />
          </Flex>
        </Form>
      )}
    </Formik>
  );
};

export default RegisterItemForm;
