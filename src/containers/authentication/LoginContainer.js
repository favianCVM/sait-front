import Form from "@components/auth_form/LoginForm"
import {Heading} from '@chakra-ui/react'
import { withRouter } from "react-router-dom"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import * as actions from '@actions/'

const LoginContainer = (props) =>{
  const {history, actions} = props;

  const handleSubmit = async () =>{
    await actions.signIn()

    /**
     * Esto lo tengo que cambiar para que dependiendo del tipo de usuario te rediriga dinamicamente.
     */
    history.push('/incidencias')
  }
  return(
    <div className="w-full py-16">
      <Heading className="my-6 text-center">Iniciar sesion</Heading>
      <Form handleSubmit={handleSubmit}/>
    </div>
  )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actions, dispatch)
})


export default connect(mapStateToProps, mapDispatchToProps)(withRouter(LoginContainer))