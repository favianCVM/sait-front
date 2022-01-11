import { Stack, Flex } from "@chakra-ui/react";
import { Formik, Form } from "formik";
import { componentRegisterValidations } from "@utils/validations";
import {
  TextareaField,
  TextField,
  SubmitFormButton,
  FileField,
} from "@components/common";
import component from "@models/component";
import { AiFillTool } from "react-icons/ai";

const ComponentForm = ({ handleSubmit, updateComponent }) => {
  return (
    <Formik
      initialValues={updateComponent ? updateComponent : component}
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

            <FileField
              name="picture"
              containerClasses="mt-12 mb-8"
              imagePreviewSize="xl"
              toolTipMessage="Foto del componente"
              id="picture"
              labelIcon={<AiFillTool />}
              disabled={props.isSubmitting}
              helperText=""
              label=""
              previewPicture={updateComponent ? updateComponent.picture : ""}
            />

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
