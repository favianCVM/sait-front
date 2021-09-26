import {Button, Box, Stack} from '@chakra-ui/react'
import { Formik, Form } from "formik";
import TextField from "@components/common/TextField";
import {} from '@utils/validations'

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
            <Stack spacing={4}>
              <TextField
                placeholder='usuario'
                size='md'
                id='user'
                name='user'
                type='text'
                helperText='introduzca nombre'
                validate={()=>{}}
              />

              <TextField
                placeholder='prioridad'
                size='md'
                id='priority'
                name='priority'
                type='text'
                helperText='introduzca nombre'
                validate={()=>{}}
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