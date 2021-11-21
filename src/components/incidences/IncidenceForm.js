import {
  Stack,
  Button,
  Box,
  Flex,
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
import { Formik, Form } from "formik";
import { incidenceValidations } from "@utils/validations";
import {
  DateField,
  TextareaField,
  SelectField,
  AutosuggestField,
  TextField,
} from "@components/common";
import incidence from "@models/incidence";

const priorities = [
  { value: 110, label: "baja" },
  { value: 120, label: "media" },
  { value: 130, label: "alta" },
];

const users = [
  { value: 0, label: "jhon" },
  { value: 2, label: "carl" },
  { value: 3, label: "timy" },
  { value: 4, label: "cristhian" },
  { value: 5, label: "amelia" },
  { value: 33, label: "json" },
  { value: 112, label: "CAPRILES" },
  { value: 22, label: "Varlos" },
  { value: 2221, label: "Caramelos de cianuro" },
  { value: 1233, label: "SIMON BOLIVAR" },
];

const IncidenceForm = ({ handleSubmit }) => {
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
              <AutosuggestField
                label="Perfil"
                //options={users.map((el) => el.label)}
                data={users}
                name="profile"
                placeholder="seleccione un perfil"
                disabled={props.isSubmitting}
              />

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

export default IncidenceForm;
