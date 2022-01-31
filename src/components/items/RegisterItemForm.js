import { Stack, Flex } from "@chakra-ui/react";
import { Formik, Form } from "formik";
import { registerItemValidations } from "@utils/validations";
import { TextField, SubmitFormButton } from "@components/common";
import item from "@models/item";

const RegisterItemForm = ({ handleSubmit = () => {}, name = "" }) => {
  return (
    <Formik
      initialValues={item}
      onSubmit={handleSubmit}
      validate={registerItemValidations}
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
            </Stack>

            <SubmitFormButton
              isSubmitting={props.isSubmitting}
              errors={props.errors}
              title={`Register ${name}`}
            />
          </Flex>
        </Form>
      )}
    </Formik>
  );
};

export default RegisterItemForm;
