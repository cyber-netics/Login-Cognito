import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";

import { AuthProvider } from "./components/AuthProvider";
import ProtectedRoute from './components/ProtectedRoute';

import SignIn from "./view/auth-view/signin";
import SignUp from "./view/auth-view/signup";
import Dashboard from "./view/dashboard";

const App = () => {
  const history = createBrowserHistory();

  return (
    <AuthProvider>
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={SignIn} />
          <Route exact path="/signup" component={SignUp} />
          <ProtectedRoute path="/dashboard" component={Dashboard} />
        </Switch>
      </Router>
    </AuthProvider>
  );
};

export default App;
