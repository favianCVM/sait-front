import {
  Stack,
  Button,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
  ListItem,
  UnorderedList
} from '@chakra-ui/react'
import TextField from "@components/common/TextField"
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
          <Stack
            spacing={3}
            mx={{
              base: 4,
              sm: 'auto'
            }}
            width={{
              base: '100%',
              sm: '70%',
              md: '55%',
              lg: '35%'
            }}
          >
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

            <Popover>
              <PopoverTrigger>
                <Button
                  colorScheme="blue"
                  type="submit"
                  isLoading={props.isSubmitting}
                  rightIcon={<FaBullseye />}
                >
                  Iniciar
                </Button>
              </PopoverTrigger>
              {Object.keys(props.errors).length > 0 && (
                <PopoverContent>
                  <PopoverArrow />
                  <PopoverCloseButton />
                  <PopoverHeader>Tienes errores</PopoverHeader>
                  <PopoverBody className="flex flex-col items-start">
                    <UnorderedList>
                      {Object.keys(props.errors).map((err) => (<ListItem>{props.errors[err]}</ListItem>))}
                    </UnorderedList>
                  </PopoverBody>
                </PopoverContent>
              )}
            </Popover>

          </Stack>
        </Form>
      )}
    </Formik>
  )
}

export default LoginForm