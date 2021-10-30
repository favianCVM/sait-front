import {Switch, Route, Redirect, Router} from 'react-router-dom'
import {
  RegisterIncident,
  TechnicianAssigment,
  Profiles,
  Incidences,
} from '@pages/admin/index'
import HomePage from '@pages/';
import Error404 from '@containers/404';
import LoginPage from '@pages/LoginPage';
import Layout from '@components/common/Layout';
import {connect} from 'react-redux';
import history from '@utils/history'

const AppRouter = (props) => {

  const {isAdmin, isUser, isLogged} = props;
  
  return (
    <Router history={history}>
      <Layout>
        <Switch>
          <Route exact path="/" component={HomePage}/>

          {
            !isLogged && (
              <>
                <Route exact path="/iniciar-sesion" component={LoginPage}/>
                
                <Route exact path="/login">
                  <Redirect to="/iniciar-sesion"/>
                </Route>
              </>
            )
          }

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
                <Route exact path="/admin/perfiles" component={Profiles} />
                <Route exact path="/admin/incidencias" component={Incidences} />

                <Route exact path="/admin/register-incident">
                  <Redirect to="/admin/registrar-incidencia"/>
                </Route>
                <Route exact path="/admin/technician-assignment">
                  <Redirect to="/admin/asignar-tecnico"/>
                </Route>
                <Route exact path="/admin/profiles">
                  <Redirect to="/admin/perfiles"/>
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
  isAdmin: state.auth.get('token') && (parseInt(state.auth.get('role')) === 60),
  isUser: state.auth.get('token') && (parseInt(state.auth.get('role')) === 50),
  isLogged: state.auth.get('logged')
})

export default connect(mapStateToProps, null)(AppRouter)