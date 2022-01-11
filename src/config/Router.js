import { Switch, Route, Redirect, Router } from "react-router-dom";
import HomePage from "@pages/";
import Error404 from "@containers/404";
import LoginPage from "@pages/LoginPage";
import Layout from "@components/common/Layout";
import { connect } from "react-redux";
import history from "@utils/history";
import routes from "@utils/routes";

const AppRouter = (props) => {
  const { isAdmin, isUser, isLogged } = props;

  return (
    <Router history={history}>
      <Layout>
        <Switch>
          <Route exact path="/" component={HomePage} />

          {!isLogged && (
            <>
              <Route exact path="/iniciar-sesion" component={LoginPage} />

              <Route exact path="/login">
                <Redirect to="/iniciar-sesion" />
              </Route>
            </>
          )}

          {
            <Switch>
              {routes[props.role]?.map((route) => (
                <Route
                  key={route.to}
                  exact
                  path={route.as}
                  component={route.component}
                />
              ))}
              {routes[props.role]?.map((route) => (
                <Route key={route.to} exact path={route.to}>
                  <Redirect to={route.as} />
                </Route>
              ))}
              <Route component={Error404} />
            </Switch>
          }
        </Switch>
      </Layout>
    </Router>
  );
};

const mapStateToProps = (state) => ({
  isAdmin: state.auth.get("token") && parseInt(state.auth.get("role")) === 60,
  isUser: state.auth.get("token") && parseInt(state.auth.get("role")) === 50,
  role: state.auth.get("role"),
  isLogged: state.auth.get("logged"),
});

export default connect(mapStateToProps, null)(AppRouter);
