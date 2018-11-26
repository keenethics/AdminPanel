import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Index from 'Pages/index';
import Components from 'Pages/components';
import NoMatch from 'Pages/no-match';

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
