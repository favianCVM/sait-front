import {
  Stack,
  Flex,
  Heading,
  Box,
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Divider,
} from "@chakra-ui/react";
import { Formik, Form } from "formik";
import { concludeIncidenceValidations } from "@utils/validations";
import {
  DateField,
  TextareaField,
  SelectField,
  SubmitFormButton,
  MultiSelectField,
  FormButton,
} from "@components/common";
import error from "@models/error";
import { priorities } from "@utils/options";
import { FaPlus, FaTimes } from "react-icons/fa";

const ConcludeIncidenceForm = ({ items = [], handleSubmit }) => {
  return (
    <Box
      border="1px"
      borderBottomLeftRadius={{
        base: "xl",
        lg: "none",
      }}
      borderTopLeftRadius={{
        base: "none",
        lg: "none",
      }}
      borderTopRightRadius={{
        base: "none",
        lg: "xl",
      }}
      borderBottomRightRadius={{
        base: "xl",
        lg: "xl",
      }}
      px="8"
      py="12"
      mx={{
        base: "auto",
        lg: "initial",
      }}
      w={{
        base: "80%",
        lg: "40%",
      }}
      overflowY="scroll"
    >
      <Formik
        initialValues={{
          errors: [],
        }}
        onSubmit={handleSubmit}
        validate={concludeIncidenceValidations}
      >
        {(props) => (
          <Form>
            <Stack
              mt={{
                base: "12",
                lg: "0",
              }}
              w="full"
              spacing="12"
              justifyContent="space-around"
            >
              <Flex
                mb={{
                  base: "0",
                  lg: "5",
                }}
                alignItems="center"
                justifyContent="space-around"
                flexDir={{
                  base: "column",
                  "2xl": "row",
                }}
                w="full"
              >
                <SubmitFormButton
                  isSubmitting={props.isSubmitting}
                  errors={props.errors}
                  title={"Concluir incidencia"}
                  buttonProps={{
                    my: {
                      base: "4",
                      "2xl": "0",
                    },
                  }}
                />
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
              <Divider />

              <Accordion allowToggle my="12">
                {props.values?.errors?.map((el, index) => (
                  <AccordionItem
                    borderWidth={2}
                    borderRadius={4}
                    key={`accordion-${index}`}
                    data-aos="fade-in"
                  >
                    <AccordionButton>
                      <Box flex="1" textAlign="left">
                        Falla&nbsp;<b>#{index + 1}</b>
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
                        <MultiSelectField
                          options={items.map((el) => ({
                            label: `${el?.itemCategory?.name} (${el.serial})`,
                            value: el.id,
                          }))}
                          name={`errors[${index}].items`}
                          id={`errors[${index}].items`}
                          placeholder="elementos"
                          label="Elementos"
                          disabled={props.isSubmitting}
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
            </Stack>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default ConcludeIncidenceForm;
