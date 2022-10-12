// eslint-disable-next-line import/no-extraneous-dependencies
import { createAction } from 'redux-actions';

export const signInRequest = createAction('SIGN_IN_REQUEST');
export const signInSuccess = createAction('SIGN_IN_SUCCESS');
export const signInFailure = createAction('SIGN_IN_FAILURE');

export const signUpRequest = createAction('SIGN_UP_REQUEST');
export const signUpSuccess = createAction('SIGN_UP_SUCCESS');
export const signUpFailure = createAction('SIGN_UP_FAILURE');

export const confirmRegisterAccountRequest = createAction(
  'CONFIRM_REGISTER_ACCOUNT_REQUEST',
);
export const confirmRegisterAccountSuccess = createAction(
  'CONFIRM_REGISTER_ACCOUNT_SUCCESS',
);
export const confirmRegisterAccountFailure = createAction(
  'CONFIRM_REGISTER_ACCOUNT_FAILURE',
);

export const signOutRequest = createAction('SIGN_OUT_REQUEST');
export const signOutSuccess = createAction('SIGN_OUT_SUCCESS');
export const signOutFailure = createAction('SIGN_OUT_FAILURE');

export const forgotPasswordRequest = createAction('FORGOT_PASSWORD_REQUEST');
export const forgotPasswordSuccess = createAction('FORGOT_PASSWORD_SUCCESS');
export const forgotPasswordFailure = createAction('FORGOT_PASSWORD_FAILURE');

export const resetPasswordRequest = createAction('RESET_PASSWORD_REQUEST');
export const resetPasswordSuccess = createAction('RESET_PASSWORD_SUCCESS');
export const resetPasswordFailure = createAction('RESET_PASSWORD_FAILURE');

export const changeInfoRequest = createAction('CHANGE_INFO_REQUEST');
export const changeInfoSuccess = createAction('CHANGE_INFO_SUCCESS');
export const changeInfoFailure = createAction('CHANGE_INFO_FAILURE');

export const changePhoneNumberRequest = createAction(
  'CHANGE_PHONE_NUMBER_REQUEST',
);
export const changePhoneNumberSuccess = createAction(
  'CHANGE_PHONE_NUMBER_SUCCESS',
);
export const changePhoneNumberFailure = createAction(
  'CHANGE_PHONE_NUMBER_FAILURE',
);

export const confirmChangeEmailRequest = createAction(
  'CONFIRM_CHANGE_EMAIL_REQUEST',
);
export const confirmChangeEmailSuccess = createAction(
  'CONFIRM_CHANGE_EMAIL_SUCCESS',
);
export const confirmChangeEmailFailure = createAction(
  'CONFIRM_CHANGE_EMAIL_FAILURE',
);

export const getUserDataRequest = createAction(
  'GET_USER_DATA_REQUEST',
);
export const getUserDataSuccess = createAction(
  'GET_USER_DATA_SUCCESS',
);
export const getUserDataFailure = createAction(
  'GET_USER_DATA_FAILURE',
);

export const resetWhenChangeInfoState = createAction(
  'RESET_WHEN_CHANGE_INFO_STATE',
);
export const resetWhenChangeEmailState = createAction(
  'RESET_WHEN_CHANGE_EMAIL_STATE',
);
export const resetWhenChangePhoneNumberState = createAction(
  'RESET_WHEN_CHANGE_PHONE_NUMBER_STATE',
);

export const resetAuthState = createAction('RESET_AUTH_STATE');
