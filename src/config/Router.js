import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom'
import {
  LoginPage,
  RegisterIncident,
  TechnicianAssigment,
  Users,
  Incidences,
} from '@pages/index'
import Layout from '@components/common/Layout';

const Router = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={LoginPage}/>
          <Route exact path="/iniciar-sesion" component={LoginPage}/>
          <Route exact path="/registrar-incidencia" component={RegisterIncident} />
          <Route exact path="/asignar-tecnico" component={TechnicianAssigment} />
          <Route exact path="/usuarios" component={Users} />
          <Route exact path="/incidencias" component={Incidences} />

          {/* ROUTE MASKS */}
          <Route exact path="/login">
            <Redirect to="/iniciar-sesion"/>
          </Route>
          <Route exact path="/register-incident">
            <Redirect to="/registrar-incidencia"/>
          </Route>
          <Route exact path="/technician-assignment">
            <Redirect to="/asignar-tecnico"/>
          </Route>
          <Route exact path="/users">
            <Redirect to="/usuarios"/>
          </Route>
          <Route exact path="/incidences">
            <Redirect to="/incidencias"/>
          </Route>

        </Switch>
      </Layout>
    </BrowserRouter>
  )
}

export default Router