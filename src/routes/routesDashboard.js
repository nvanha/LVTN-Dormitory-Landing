import { v4 as uuidv4 } from 'uuid';

import config from '~/configs';
import { HomeDashboardPage } from '~/pages/Dashboard';

export default [
  {
    id: `user-${uuidv4()}`,
    path: config.routesDashboard.homeDashboard,
    component: HomeDashboardPage,
  },
];
