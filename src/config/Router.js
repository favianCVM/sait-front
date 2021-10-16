import {Switch, Route, Redirect, Router} from 'react-router-dom'
import {
  RegisterIncident,
  TechnicianAssigment,
  Users,
  Incidences,
} from '@pages/admin/index'
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
          <Route exact path="/" component={LoginPage}/>
          <Route exact path="/iniciar-sesion" component={LoginPage}/>

          <Route exact path="/login">
            <Redirect to="/iniciar-sesion"/>
          </Route>
          
          {
            isAdmin && (
              <>
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
                  <Redirect to="/admin/incidencias"/>
                </Route>
              </>
            )
          }

        </Switch>
      </Layout>
    </Router>
  )
}

const mapStateToProps = (state) => ({
  token:  state.user.get('token'),
  isLogged: state.user.get('logged'),
  full_name: state.user.get('full_name'),
  type: state.user.get('type'),
  isAdmin: state.user.get('id_user') && (parseInt(state.user.get('type')) === 60),
  isUser: state.user.get('id_user') && (parseInt(state.user.get('type')) === 50),
})

export default connect(mapStateToProps, null)(AppRouter)