import {
  Stack,
  Flex,
  Heading,
  Box,
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionIcon,
  AccordionProvider,
  AccordionPanel,
} from "@chakra-ui/react";
import { Formik, Form } from "formik";
import { incidenceValidations } from "@utils/validations";
import { FaTimes, FaPlus } from "react-icons/fa";
import {
  DateField,
  TextareaField,
  SelectField,
  AutosuggestField,
  TextField,
  SubmitFormButton,
  FormButton,
} from "@components/common";
import incidence from "@models/incidence";
import error from "@models/error";
import { priorities } from "@utils/options";

const IncidenceForm = ({
  handleSubmit,
  isAdmin = false,
  incidenceTypes = [],
  users = [],
  userDevices = [],
  handleUserChange = () => {},
  updateIncidence = {},
}) => {
  return (
    <Formik
      initialValues={updateIncidence ? updateIncidence : incidence}
      onSubmit={handleSubmit}
      validate={(values) => incidenceValidations(values, { isAdmin })}
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

              {isAdmin && (
                <AutosuggestField
                  data={users.map((el) => ({
                    label: `${el.first_name} #${el.id}`,
                    value: el.id,
                  }))}
                  handleChangeCallback={isAdmin ? handleUserChange : null}
                  name="user_id"
                  placeholder="seleccione un usuario"
                  disabled={props.isSubmitting}
                  label="Usuario que percibio la incindencia"
                />
              )}

              <SelectField
                label="Equipo"
                placeholder="Equipo"
                name={`device_id`}
                id={`device_id`}
                disabled={props.isSubmitting}
                options={userDevices.map((el) => ({
                  label: el.serial,
                  value: el.id,
                }))}
              />

              <SelectField
                label="Tipo de incidencia"
                name="type_id"
                placeholder="seleccione un tipo"
                disabled={props.isSubmitting}
                options={[
                  { value: "new", label: "Nuevo tipo" },
                  ...incidenceTypes.map((el) => ({
                    value: el.id,
                    label: el.name,
                  })),
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

                        {isAdmin && (
                          <SelectField
                            label="Prioridad"
                            placeholder="prioridad"
                            name={`errors[${index}].priority`}
                            id={`errors[${index}].priority`}
                            disabled={props.isSubmitting}
                            options={priorities}
                          />
                        )}
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
            </Stack>
          </Flex>

          <SubmitFormButton
            isSubmitting={props.isSubmitting}
            errors={props.errors}
            title={"Crear incidencia"}
            containerProps={{
              textAlign: "center",
              mt: "28",
              mb: "8",
            }}
          />
        </Form>
      )}
    </Formik>
  );
};

export default IncidenceForm;
