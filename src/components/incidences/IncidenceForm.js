import {Button, Box, Stack} from '@chakra-ui/react'
import { Formik, Form } from "formik";
import TextField from "@components/common/TextField";
import {} from '@utils/validations'
import { AutocompleteSelect } from '@components/common';

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
        date: '',
        description: '',
      }}
      onSubmit={handleSubmit}
    >
      {(props) => (
        <Form>
          <Box display="flex" flexDirection="column" w="100%">
            <Stack spacing={3}>
              <AutocompleteSelect 
                name="user"
                placeholder="seleccione un usuario"
                listItems={countries}
              />

              <AutocompleteSelect 
                name="priority"
                placeholder="seleccione una prioridad"
                listItems={countries}
              />

              <TextField
                placeholder='fecha'
                size='md'
                id='date'
                name='date'
                type='text'
                helperText='introduzca nombre'
                validate={()=>{}}
              />

              <TextField
                placeholder='descripcion'
                size='md'
                id='description'
                name='description'
                type='text'
                helperText='introduzca nombre'
                validate={()=>{}}
              />
            </Stack>

            <Button
              colorScheme="blue"
              type="submit"
              isLoading={props.isSubmitting}
              alignSelf="center"
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