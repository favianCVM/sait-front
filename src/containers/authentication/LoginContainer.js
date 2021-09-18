import Form from "@components/auth_form/LoginForm"
import {Heading} from '@chakra-ui/react'

const LoginContainer = () =>{
  return(
    <div className="w-full py-16">
      <Heading className="my-6 text-center">Iniciar sesion</Heading>
      <Form/>
    </div>
  )
}

export default LoginContainer