import React, { memo, lazy, Suspense } from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route,
} from "react-router-dom";

export const RoutesComponent: React.FC = () => (
  <Suspense fallback="Loading">
    <Router>
      <Switch>
        <Redirect from="/" to="/encrypt" exact />
        <Route exact path="/encrypt" component={lazy(() => import('pages/Encrypt'))} />
        <Route exact path="/decrypt" component={lazy(() => import('pages/Decrypt'))} />
        <Route exact path="/not-found" component={lazy(() => import('pages/NotFound'))} />
        <Redirect from="/*" to="/not-found" />
      </Switch>
    </Router>
  </Suspense>
);

const Routes = memo(RoutesComponent);
Routes.displayName = 'Routes';

export default Routes;
