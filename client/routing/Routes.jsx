import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

import MainLayout from 'Layout/Main';

import Index from 'Pages/Index';
import Signin from 'Pages/Signin';
import Signup from 'Pages/Signup';
import FormComponents from 'Pages/FormComponents';
import NoMatch from 'Pages/NoMatch';
import Auth from 'Pages/Auth';
import Callback from 'Pages/Callback';

import Route from './Route';

const Routes = () => (
  <Router>
    <MainLayout>
      <Switch>
        <Route path="/" component={Index} onlyAuthenticated exact />
        <Route path="/form-components" component={FormComponents} />
        <Route path="/signin" onlyUnauthenticated component={Signin} />
        <Route path="/signup" onlyUnauthenticated component={Signup} />
        <Route path="/auth" onlyUnauthenticated component={Auth} />
        <Route path="/callback" onlyUnauthenticated component={Callback} />
        <Route component={NoMatch} />
      </Switch>
    </MainLayout>
  </Router>
);

export default Routes;
