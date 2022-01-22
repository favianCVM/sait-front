import React from "react";
import { Box, Stack } from "@chakra-ui/react";
import { MultiSelectField, SubmitFormButton } from "@components/common";
import { Formik, Form } from "formik";

const IncidenceAsign = ({
  incidence = null,
  handleAsign = () => {},
  technicians = [],
}) => {
  return (
    <Box
      border="1px"
      borderRadius="xl"
      px="8"
      py="12"
      my="8"
      mx="auto"
      w={{
        base: "80%",
        md: "45%",
      }}
    >
      <Formik
        initialValues={{
          technicians: [],
        }}
        validate={(values) => {
          const errors = {};

          if (!values.technicians.length) {
            errors.technicians =
              "Debe selecionar al menos un técnico a asignar";
          } else delete errors.technicians;

          return errors;
        }}
        onSubmit={handleAsign}
      >
        {(props) => (
          <Form>
            <Stack alignItems="center" spacing={5}>
              <MultiSelectField
                name="technicians"
                id="technicians"
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

export default IncidenceAsign;
