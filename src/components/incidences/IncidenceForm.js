import {
  Stack,
  Flex,
  Button,
  IconButton,
  Heading,
  Box,
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionIcon,
  AccordionProvider,
  AccordionPanel,
} from "@chakra-ui/react";
import { Formik, Form, Field } from "formik";
import { incidenceValidations } from "@utils/validations";
import { FaTimes, FaPlus } from "react-icons/fa";
import {
  DateField,
  TextareaField,
  SelectField,
  AutosuggestField,
  TextField,
  SubmitFormButton,
} from "@components/common";
import incidence from "@models/incidence";
import error from "@models/error";

const IncidenceForm = ({
  handleSubmit,
  isAdmin = false,
  incidenceTypes = [],
}) => {
  return (
    <Formik
      initialValues={incidence}
      onSubmit={handleSubmit}
      validate={incidenceValidations}
    >
      {(props) => (
        <Form>
          <Flex>
            <Stack
              flexDir="column"
              w={{
                base: "100%",
                lg: "45%",
              }}
              spacing={4}
              alignItems="center"
            >
              <Heading as="h2" fontSize="4xl">
                Datos de la incidencia
              </Heading>
              <SelectField
                label="Tipo de incidencia"
                name="type_id"
                placeholder="seleccione un tipo"
                disabled={props.isSubmitting}
                options={[
                  { value: "new", label: "Nuevo tipo" },
                  ...incidenceTypes,
                ]}
              />

              {props.values?.type_id === "new" && (
                <TextField
                  name="type.name"
                  id="type.name"
                  label="Nombre del tipo de incidencia"
                  disabled={props.isSubmitting}
                  placeholder="Introduzca el nombre del tipo de incidencia"
                />
              )}

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

            <Stack
              w={{
                lg: "65%",
              }}
              spacing="12"
            >
              <Flex
                justifyContent="center"
                w={{
                  lg: "100%",
                }}
              >
                <Field name="add_error">
                  {({ field, form }) => (
                    <Button
                      leftIcon={<FaPlus />}
                      colorScheme="green"
                      onClick={() => {
                        let errors = form.values.errors;
                        errors.push(error);
                        form.setFieldValue("errors", errors);
                      }}
                    >
                      Anadir falla
                    </Button>
                  )}
                </Field>
              </Flex>

              <Accordion
                allowToggle
                my="12"
                px={{
                  lg: "10",
                }}
              >
                {props.values?.errors?.map((el, index) => (
                  <AccordionItem
                    borderWidth={2}
                    borderRadius={4}
                    key={`accordion-${index}`}
                  >
                    <AccordionButton>
                      <Box flex="1" textAlign="left">
                        Error&nbsp;<b>#{index}</b>
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                    <AccordionPanel>
                      <Stack spacing="4">
                        <TextareaField
                          name={`errors[${index}].description`}
                          id={`errors[${index}].description`}
                          label="Descripcion"
                          placeholder="introduzca una descripción"
                          disabled={props.isSubmitting}
                        />

                        {isAdmin && (
                          <SelectField
                            placeholder="prioridad"
                            name={`errors[${index}].priority`}
                            id={`errors[${index}].priority`}
                            disabled={props.isSubmitting}
                            options={[
                              {
                                value: 1,
                                label: "-1 no presenta mayor problema",
                              },
                              { value: 2, label: "-2 recomendado de atender" },
                              { value: 3, label: "-3 necesario de atender" },
                              { value: 4, label: "-4 potencialmente critico" },
                              { value: 5, label: "-5 actualmente critico" },
                            ]}
                          />
                        )}
                      </Stack>
                      <Flex justifyContent="end" my="4">
                        <Field>
                          {({ field, form }) => (
                            <Button
                              colorScheme="pink"
                              size="md"
                              onClick={() => {
                                let errors = form.values.errors;
                                errors.splice(index, 1);
                                form.setFieldValue("errors", errors);
                              }}
                              leftIcon={<FaTimes />}
                            >
                              Eliminar falla
                            </Button>
                          )}
                        </Field>
                      </Flex>
                    </AccordionPanel>
                  </AccordionItem>
                ))}
              </Accordion>
            </Stack>
          </Flex>

          <SubmitFormButton
            isSubmitting={props.isSubmitting}
            errors={props.errors}
            title={"Crear incidencia"}
            containerProps={{
              textAlign: "center",
              my: "16",
            }}
          />
        </Form>
      )}
    </Formik>
  );
};

export default IncidenceForm;
