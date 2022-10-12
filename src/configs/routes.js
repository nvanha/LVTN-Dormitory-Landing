const routesLanding = {
  homeLanding: '/',
};

const routesAuth = {
  login: '/login',
  register: '/register',
  confirmAccount: '/confirm-account/:username',
  forgotPassword: '/forgot-password',
  resetPassword: '/reset-password/:username',
};

const routesDashboard = {
  homeDashboard: '/dashboard',
};

export { routesLanding, routesAuth, routesDashboard };
