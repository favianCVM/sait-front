import {Switch, Route, Redirect, Router} from 'react-router-dom'
import {
  RegisterIncident,
  TechnicianAssigment,
  Users,
  Incidences,
} from '@pages/admin/index'
import Error404 from '@containers/404';
import LoginPage from '@pages/LoginPage';
import Layout from '@components/common/Layout';
import {connect} from 'react-redux';
import history from '@utils/history'

const AppRouter = (props) => {

  const {isAdmin, isUser} = props;
  
  return (
    <Router history={history}>
      <Layout>
        <Switch>
          {/* <Route exact path="/" component={LoginPage}/> */}
          <Route exact path="/iniciar-sesion" component={LoginPage}/>

          <Route exact path="/login">
            <Redirect to="/iniciar-sesion"/>
          </Route>

          {/* {
            isUser && (
              <Switch>

                <Route path="*" component={Error404}/>          
              </Switch>
            )
          } */}
          
          {
            isAdmin && (
              <Switch>
                <Route exact path="/admin/registrar-incidencia" component={RegisterIncident} />
                <Route exact path="/admin/asignar-tecnico" component={TechnicianAssigment} />
                <Route exact path="/admin/usuarios" component={Users} />
                <Route exact path="/admin/incidencias" component={Incidences} />

                <Route exact path="/admin/register-incident">
                  <Redirect to="/admin/registrar-incidencia"/>
                </Route>
                <Route exact path="/admin/technician-assignment">
                  <Redirect to="/admin/asignar-tecnico"/>
                </Route>
                <Route exact path="/admin/users">
                  <Redirect to="/admin/usuarios"/>
                </Route>
                <Route exact path="/admin/incidences">
                  <Redirect  to="/admin/incidencias"/>
                </Route>

                <Route component={Error404}/>          
              </Switch>
            )
          }

        </Switch>
      </Layout>
    </Router>
  )
}

const mapStateToProps = (state) => ({
  isAdmin: state.user.get('token') && (parseInt(state.user.get('role')) === 60),
  isUser: state.user.get('token') && (parseInt(state.user.get('role')) === 50),
})

export default connect(mapStateToProps, null)(AppRouter)