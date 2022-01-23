import { Stack, Flex, Heading, Box } from "@chakra-ui/react";
import { Formik, Form } from "formik";
import { incidenceCreationValidations } from "@utils/validations";
import {
  DateField,
  TextareaField,
  SelectField,
  SubmitFormButton,
} from "@components/common";
import incidence from "@models/incidence";
import { priorities } from "@utils/options";

const IncidenceForm = ({
  handleSubmit = () => {},
  devices = [],
  updateIncidence = null,
}) => {
  return (
    <Formik
      initialValues={updateIncidence ? updateIncidence : incidence}
      onSubmit={handleSubmit}
      validate={incidenceCreationValidations}
    >
      {(props) => (
        <Form>
          <Flex
            px={{
              base: "6",
              lg: "0",
            }}
            flexDir={{
              base: "column",
              lg: "row",
            }}
            justifyContent="center"
          >
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
                label="Equipo"
                placeholder="Equipo"
                name={`device_id`}
                id={`device_id`}
                disabled={props.isSubmitting}
                options={devices.map((el) => ({
                  label: el.serial,
                  value: el.id,
                }))}
              />

              <SelectField
                label="Tipo de incidencia (opcional)"
                name="incidence_type"
                placeholder="seleccione un tipo"
                disabled={props.isSubmitting}
                options={[
                  { value: "hardware", label: "Hardware" },
                  { value: "software", label: "Software" },
                  { value: "other", label: "Otro" },
                ]}
              />

              <SelectField
                label="Prioridad"
                placeholder="prioridad"
                name="priority"
                id="priority"
                disabled={props.isSubmitting}
                options={priorities}
              />

              {/* <DateField
                name="date"
                id="date"
                placeholder="fecha de incidencia"
                maxDate={new Date()}
                disabled={props.isSubmitting}
                label="Fecha de incidencia"
              /> */}

              <TextareaField
                name="description"
                id="description"
                placeholder="introduzca una descripción"
                size="md"
                showError={false}
                label="Descripción"
                disabled={props.isSubmitting}
              />

              <TextareaField
                name="location"
                id="location"
                placeholder="introduzca el area donde sucedio"
                size="md"
                showError={false}
                label="Zona de incidencia"
                disabled={props.isSubmitting}
              />
            </Stack>

            {/* <Stack
              mt={{
                base: "12",
                lg: "0",
              }}
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
                <FormButton
                  title="Anadir falla"
                  handleClick={({ form }) => {
                    let errors = form.values.errors;
                    errors.push(error);
                    form.setFieldValue("errors", errors);
                  }}
                  colorScheme="green"
                  Icon={FaPlus}
                />
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
                    data-aos="fade-in"
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
                          showError={false}
                        />

                        <DateField
                          name={`errors[${index}].date`}
                          id={`errors[${index}].date`}
                          label="Fecha de la falla"
                          maxDate={new Date()}
                        />
                      </Stack>
                      <Flex justifyContent="end" my="4">
                        <FormButton
                          title="Eliminar falla"
                          handleClick={({ form }) => {
                            let errors = form.values.errors;
                            errors.splice(index, 1);
                            form.setFieldValue("errors", errors);
                          }}
                          colorScheme="pink"
                          Icon={FaTimes}
                        />
                      </Flex>
                    </AccordionPanel>
                  </AccordionItem>
                ))}
              </Accordion>
            </Stack> */}
          </Flex>

          <SubmitFormButton
            isSubmitting={props.isSubmitting}
            errors={props.errors}
            title={
              updateIncidence ? "Actualizar incidencia" : "Registrar incidencia"
            }
            containerProps={{
              textAlign: "center",
              mb: "8",
              my: "10",
            }}
          />
        </Form>
      )}
    </Formik>
  );
};

export default IncidenceForm;
