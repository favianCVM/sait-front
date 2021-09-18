import LoginContainer from "@containers/authentication/LoginContainer"
import CompanyHeader from "@components/common/CompanyHeader"

const LoginPage = () => {
  return(
    <div>
      <CompanyHeader />
      <LoginContainer/>
    </div>
  )
}

export default LoginPage