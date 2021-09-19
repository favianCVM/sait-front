import LoginContainer from "@containers/authentication/LoginContainer"
import CompanyHeader from "@components/common/CompanyHeader"

const LoginPage = () => {
  return(
    <>
      <CompanyHeader />
      <LoginContainer/>
    </>
  )
}

export default LoginPage