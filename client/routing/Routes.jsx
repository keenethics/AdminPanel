import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import MainLayout from 'Layout/Main';

import Index from 'Pages/Index';
import FormComponents from 'Pages/FormComponents';
import NoMatch from 'Pages/NoMatch';

const Routes = () => (
  <Router>
    <MainLayout>
      <Switch>
        <Route path="/" component={Index} exact />
        <Route path="/form-components" component={FormComponents} />
        <Route component={NoMatch} />
      </Switch>
    </MainLayout>
  </Router>
);

export default Routes;
