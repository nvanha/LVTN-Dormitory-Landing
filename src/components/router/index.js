import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// import routes
import { routesAuth, routesDashboard, routesLanding } from '~/routes';

// import layouts
import { AuthLayout, DashboardLayout, LandingLayout } from '~/layouts';

// others
import { NotFoundPage } from '~/pages/Other';

const Routing = () => (
  <Router>
    <Switch>
      {routesLanding.map(({ id, path, component }) => (
        <LandingLayout key={id} path={path} component={component} exact />
      ))}
      {routesAuth.map(({ id, path, component }) => (
        <AuthLayout key={id} path={path} component={component} exact />
      ))}
      {routesDashboard.map(({ id, path, component }) => (
        <DashboardLayout key={id} path={path} component={component} exact />
      ))}
      <Route path="*" component={NotFoundPage} exact />
    </Switch>
  </Router>
);

export default Routing;
