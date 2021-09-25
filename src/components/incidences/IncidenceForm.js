import {Button} from '@chakra-ui/react'
import { Formik, Form } from "formik";
import TextField from "@components/common/TextField";

const IncidenceForm = () => {
  return(
    <Formik 
      initialValues={{
        user:'',
        priority: '',
        date: '',
        description: '',
      }}
      onSubmit={()=>{}}
    >
      {(props) => (
        <Form>
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

          <Button
            colorScheme="blue"
            type="submit"
            isLoading={props.isSubmitting}
          >
            Registrar
          </Button>
        </Form>
      )}
    </Formik>
  )
}

export default IncidenceForm;