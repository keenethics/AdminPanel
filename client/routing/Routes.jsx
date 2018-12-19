import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Index from 'Pages/Index';
import Components from 'Pages/Components';
import NoMatch from 'Pages/NoMatch';

const Routes = () => (
  <Router>
    <Switch>
      <Route path="/" component={Index} exact />
      <Route path="/components" component={Components} />
      <Route component={NoMatch} />
    </Switch>
  </Router>
);

export default Routes;
