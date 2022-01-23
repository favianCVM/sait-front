import React from "react";
import { Box, Stack, Heading } from "@chakra-ui/react";
import { MultiSelectField, SubmitFormButton } from "@components/common";
import { Formik, Form } from "formik";

const IncidenceAsignForm = ({
  incidence = null,
  handleAsign = () => {},
  technicians = [],
}) => {
  return (
    <Box
      border="1px"
  
      borderBottomLeftRadius={{
        base: "xl",
        lg: "none"
      }}
      borderTopLeftRadius={{
        base: "none",
        lg: "none"
      }}
      borderTopRightRadius={{
        base: "none",
        lg:"xl"
      }}
      borderBottomRightRadius={{
        base: "xl",
        lg: "xl"
      }}
      px="8"
      py="12"
      mx={{
        base: "auto",
      }}
      w={{
        base: "80%",
        lg: "50%",
      }}
    >
      <Heading mb="7" textAlign="center" as="h3">
        Asignación de técnico
      </Heading>
      <Formik
        initialValues={
          incidence
            ? incidence
            : {
                technicians: [],
              }
        }
        // validate={(values) => {
        //   const errors = {};

        //   if (!values.technicians.length) {
        //     errors.technicians =
        //       "Debe selecionar al menos un técnico a asignar";
        //   } else delete errors.technicians;

        //   return errors;
        // }}
        onSubmit={handleAsign}
      >
        {(props) => (
          <Form>
            <Stack alignItems="center" spacing={5}>
              <MultiSelectField
                name="technicians"
                id="technicians"
                // options={technicians
                //   ?.filter(
                //     (el) =>
                //       !incidence?.technicians?.find((il) => il.id === el.id)
                //   )
                //   ?.map((el) => ({
                //     label: `${el.user?.first_name} ${el.user?.last_name}`,
                //     value: el.id,
                //   }))}
                options={technicians.map((el) => ({
                  label: `${el.user?.first_name} ${el.user?.last_name}`,
                  value: el.id,
                }))}
                label="Técnicos"
                placeholder="seleccione los técnicos a asignar"
                disabled={props.isSubmitting}
              />

              <SubmitFormButton
                errors={props.errors}
                isSubmitting={props.isSubmitting}
                title="Asignar técnicos"
              />
            </Stack>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default IncidenceAsignForm;
