import React, { Fragment, Component } from "react";
import {
  Switch,
  Route,
  Link as RouterLink,
  HashRouter,
  Redirect
} from "react-router-dom";
import AppLayout from "./layout/AppLayout";
class Routes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogged: true
    };
  }

  componentDidMount() {
    //check onAuthChange user is logged
  }

  render() {
    const auth = () => {
      // auth aux function
    };

    const login = () => {
      return <h1>Login</h1>;
    };

    const ProtectedRoute = ({ component: Component, ...rest }) => (
      <Route
        {...rest}
        render={props =>
          this.state.isLogged ? (
            <Component {...props} />
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: props.location }
              }}
            />
          )
        }
      />
    );

    const NotProtectedRoute = ({ component: Component, ...rest }) => (
      <Route
        {...rest}
        render={props =>
          !this.state.isLogged ? (
            <Component {...props} />
          ) : (
            <Redirect
              to={{
                pathname: "/",
                state: { from: props.location }
              }}
            />
          )
        }
      />
    );

    return (
      <HashRouter basename="/app1">
        <Switch>
          <NotProtectedRoute exact path="/login" component={login} />
          <ProtectedRoute path="/" component={AppLayout} />
        </Switch>
      </HashRouter>
    );
  }
}

export default Routes;
