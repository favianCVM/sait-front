import {
  Stack,
  Button} from '@chakra-ui/react'
import TextField from "@components/auth_form/TextField"
import {FaBullseye} from 'react-icons/fa'
import { Formik, Form } from 'formik';
import { loginValidations } from '@utils/validations';

const LoginForm = ({handleSubmit}) => {
  return(
    <Formik
      initialValues={{
        name: '',
        password: ''
      }}
      onSubmit={(values)=>console.log(values)}
    >
      {(props) => (
        <Form>
          <Stack spacing={3} className="mx-auto lg:w-4/12 md:w-5/12 sm:w-6/12">
            <TextField
              placeholder='nombre'
              size='md'
              id='name'
              name='name'
              type='text'
              helperText='introduzca nombre'
              validate={loginValidations.validateLoginName}
            />

            <TextField
              placeholder='contrasenna'
              size='md'
              id='password'
              name='password'
              type='password'
              helperText='introduzca contrasenna'
              validate={loginValidations.validateLoginPassword}
            />

            <Button
              colorScheme="blue"
              type="submit"
              isLoading={props.isSubmitting}
              rightIcon={<FaBullseye />}
              >
              Iniciar
            </Button>
          </Stack>
        </Form>
      )}
    </Formik>
  )
}

export default LoginForm