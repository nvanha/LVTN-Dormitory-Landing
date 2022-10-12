import { v4 as uuidv4 } from 'uuid';

import config from '~/configs';
import {
  LoginPage,
  RegisterPage,
  ConfirmAccountPage,
  ForgotPasswordPage,
  ResetPasswordPage,
} from '~/pages/Auth';

export default [
  {
    id: `auth-${uuidv4()}`,
    path: config.routesAuth.login,
    component: LoginPage,
  },
  {
    id: `auth-${uuidv4()}`,
    path: config.routesAuth.register,
    component: RegisterPage,
  },
  {
    id: `auth-${uuidv4()}`,
    path: config.routesAuth.confirmAccount,
    component: ConfirmAccountPage,
  },
  {
    id: `auth-${uuidv4()}`,
    path: config.routesAuth.forgotPassword,
    component: ForgotPasswordPage,
  },
  {
    id: `auth-${uuidv4()}`,
    path: config.routesAuth.resetPassword,
    component: ResetPasswordPage,
  },
];
