import { v4 as uuidv4 } from 'uuid';

import config from '~/configs';
import { HomeLandingPage } from '~/pages/Landing';

export default [
  {
    id: `landing-${uuidv4()}`,
    path: config.routesLanding.homeLanding,
    component: HomeLandingPage,
  },
];
