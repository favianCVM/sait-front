import {Button, Box, Stack} from '@chakra-ui/react'
import { Formik, Form } from "formik";
import {} from '@utils/validations'
import { AutocompleteSelect, DateField, TextareaField } from '@components/common';
import Loader from '@components/common/Loader';

const countries = [
  { value: "ghana", label: "Ghana" },
  { value: "nigeria", label: "Nigeria" },
  { value: "kenya", label: "Kenya" },
  { value: "southAfrica", label: "South Africa" },
  { value: "unitedStates", label: "United States" },
  { value: "canada", label: "Canada" },
  { value: "germany", label: "Germany" }
];

const IncidenceForm = ({handleSubmit}) => {
  return(
    <Formik
      initialValues={{
        user:'',
        priority: '',
        date: new Date(),
        description: '',
      }}
      onSubmit={handleSubmit}
    >
      {(props) => (
        <Form>
          <Box display="flex" flexDirection="column" w="100%">
            <Stack>
              <AutocompleteSelect
                name="user"
                placeholder="seleccione un usuario"
                listItems={countries}
                containerClasses="-mb-10"
              />

              <AutocompleteSelect
                name="priority"
                placeholder="seleccione una prioridad"
                listItems={countries}
                containerClasses="-mb-10"
              />

              <DateField
                label="fecha"
                name="date"
                maxDate={new Date()}
              />

              <TextareaField
                name="description"
                id="description"
                placeholder="description"
                size='md'
              />
            </Stack>

            <Button
              colorScheme="blue"
              type="submit"
              isLoading={props.isSubmitting}
              alignSelf="center"
              spinner={<Loader circleH="h-4" circleW="w-4"/>}
            >
              Registrar
            </Button>

          </Box>

        </Form>
      )}
    </Formik>
  )
}

export default IncidenceForm;