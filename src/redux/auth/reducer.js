// eslint-disable-next-line import/no-extraneous-dependencies
import { handleActions } from 'redux-actions';
import * as Actions from './actions';

const initialState = {
  isSignInRequest: false,
  isSignInSuccess: false,
  isSignInFailure: false,
  isSignUpRequest: false,
  isSignUpSuccess: false,
  isSignUpFailure: false,
  isConfirmRegisterAccountRequest: false,
  isConfirmRegisterAccountSuccess: false,
  isConfirmRegisterAccountFailure: false,
  isSignOutRequest: false,
  isSignOutSuccess: false,
  isSignOutFailure: false,
  isForgotPasswordRequest: false,
  isForgotPasswordSuccess: false,
  isForgotPasswordFailure: false,
  isResetPasswordRequest: false,
  isResetPasswordSuccess: false,
  isResetPasswordFailure: false,
  isChangeInfoRequest: false,
  isChangeInfoSuccess: false,
  isChangeInfoFailure: false,
  isConfirmChangeEmailRequest: false,
  isConfirmChangeEmailSuccess: false,
  isConfirmChangeEmailFailure: false,
  isChangePhoneNumberRequest: false,
  isChangePhoneNumberSuccess: false,
  isChangePhoneNumberFailure: false,
  isGetUserDataRequest: false,
  isGetUserDataSuccess: false,
  isGetUserDataFailure: false,
  userData: {},
  errorMessages: [],
};
const reducer = handleActions(
  {
    // #region : Sign In
    [Actions.signInRequest]: (state) => ({
      ...state,
      isSignInRequest: true,
      isSignInSuccess: false,
      isSignInFailure: false,
    }),
    [Actions.signInSuccess]: (state) => ({
      ...state,
      isSignInRequest: false,
      isSignInSuccess: true,
      isSignInFailure: false,
      errorMessages: [],
    }),
    [Actions.signInFailure]: (state, { payload }) => ({
      ...state,
      isSignInRequest: false,
      isSignInSuccess: false,
      isSignInFailure: true,
      errorMessages: payload,
    }),
    // #endregion
    // #region : Sign Up
    [Actions.signUpRequest]: (state) => ({
      ...state,
      isSignUpRequest: true,
      isSignUpSuccess: false,
      isSignUpFailure: false,
    }),
    [Actions.signUpSuccess]: (state) => ({
      ...state,
      isSignUpRequest: false,
      isSignUpSuccess: true,
      isSignUpFailure: false,
      errorMessages: [],
    }),
    [Actions.signUpFailure]: (state, { payload }) => ({
      ...state,
      isSignUpRequest: false,
      isSignUpSuccess: false,
      isSignUpFailure: true,
      errorMessages: payload,
    }),
    [Actions.confirmRegisterAccountRequest]: (state) => ({
      ...state,
      isConfirmRegisterAccountRequest: true,
      isConfirmRegisterAccountSuccess: false,
      isConfirmRegisterAccountFailure: false,
    }),
    [Actions.confirmRegisterAccountSuccess]: (state) => ({
      ...state,
      isConfirmRegisterAccountRequest: false,
      isConfirmRegisterAccountSuccess: true,
      isConfirmRegisterAccountFailure: false,
      errorMessages: [],
    }),
    [Actions.confirmRegisterAccountFailure]: (state, { payload }) => ({
      ...state,
      isConfirmRegisterAccountRequest: false,
      isConfirmRegisterAccountSuccess: false,
      isConfirmRegisterAccountFailure: true,
      errorMessages: payload,
    }),
    // #endregion
    // #region : Sign Out
    [Actions.signOutRequest]: (state) => ({
      ...state,
      isSignOutRequest: true,
      isSignOutSuccess: false,
      isSignOutFailure: false,
    }),
    [Actions.signOutSuccess]: (state) => ({
      ...state,
      isSignOutRequest: false,
      isSignOutSuccess: true,
      isSignOutFailure: false,
      errorMessages: [],
    }),
    [Actions.signOutFailure]: (state, { payload }) => ({
      ...state,
      isSignOutRequest: false,
      isSignOutSuccess: false,
      isSignOutFailure: true,
      errorMessages: payload,
    }),
    // #endregion
    // #region : Forgot Password
    [Actions.forgotPasswordRequest]: (state) => ({
      ...state,
      isForgotPasswordRequest: true,
      isForgotPasswordSuccess: false,
      isForgotPasswordFailure: false,
    }),
    [Actions.forgotPasswordSuccess]: (state) => ({
      ...state,
      isForgotPasswordRequest: false,
      isForgotPasswordSuccess: true,
      isForgotPasswordFailure: false,
      errorMessages: [],
    }),
    [Actions.forgotPasswordFailure]: (state, { payload }) => ({
      ...state,
      isForgotPasswordRequest: false,
      isForgotPasswordSuccess: false,
      isForgotPasswordFailure: true,
      errorMessages: payload,
    }),
    [Actions.resetPasswordRequest]: (state) => ({
      ...state,
      isResetPasswordRequest: true,
      isResetPasswordSuccess: false,
      isResetPasswordFailure: false,
    }),
    [Actions.resetPasswordSuccess]: (state) => ({
      ...state,
      isResetPasswordRequest: false,
      isResetPasswordSuccess: true,
      isResetPasswordFailure: false,
      errorMessages: [],
    }),
    [Actions.resetPasswordFailure]: (state, { payload }) => ({
      ...state,
      isResetPasswordRequest: false,
      isResetPasswordSuccess: false,
      isResetPasswordFailure: true,
      errorMessages: payload,
    }),
    // #endregion
    // #region : Change Info
    [Actions.changeInfoRequest]: (state) => ({
      ...state,
      isChangeInfoRequest: true,
      isChangeInfoSuccess: false,
      isChangeInfoFailure: false,
    }),
    [Actions.changeInfoSuccess]: (state) => ({
      ...state,
      isChangeInfoRequest: false,
      isChangeInfoSuccess: true,
      isChangeInfoFailure: false,
      errorMessages: [],
    }),
    [Actions.changeInfoFailure]: (state, { payload }) => ({
      ...state,
      isChangeInfoRequest: false,
      isChangeInfoSuccess: false,
      isChangeInfoFailure: true,
      errorMessages: payload,
    }),
    [Actions.confirmChangeEmailRequest]: (state) => ({
      ...state,
      isConfirmChangeEmailRequest: true,
      isConfirmChangeEmailSuccess: false,
      isConfirmChangeEmailFailure: false,
    }),
    [Actions.confirmChangeEmailSuccess]: (state) => ({
      ...state,
      isConfirmChangeEmailRequest: false,
      isConfirmChangeEmailSuccess: true,
      isConfirmChangeEmailFailure: false,
      errorMessages: [],
    }),
    [Actions.confirmChangeEmailFailure]: (state, { payload }) => ({
      ...state,
      isConfirmChangeEmailRequest: false,
      isConfirmChangeEmailSuccess: false,
      isConfirmChangeEmailFailure: true,
      errorMessages: payload,
    }),
    [Actions.changePhoneNumberRequest]: (state) => ({
      ...state,
      isChangePhoneNumberRequest: true,
      isChangePhoneNumberSuccess: false,
      isChangePhoneNumberFailure: false,
    }),
    [Actions.changePhoneNumberSuccess]: (state) => ({
      ...state,
      isChangePhoneNumberRequest: false,
      isChangePhoneNumberSuccess: true,
      isChangePhoneNumberFailure: false,
      errorMessages: [],
    }),
    [Actions.changePhoneNumberFailure]: (state, { payload }) => ({
      ...state,
      isChangePhoneNumberRequest: false,
      isChangePhoneNumberSuccess: false,
      isChangePhoneNumberFailure: true,
      errorMessages: payload,
    }),
    // #endregion
    [Actions.getUserDataRequest]: (state) => ({
      ...state,
      isGetUserDataRequest: true,
      isGetUserDataSuccess: false,
      isGetUserDataFailure: false,
    }),
    [Actions.getUserDataSuccess]: (state, { payload }) => ({
      ...state,
      isGetUserDataRequest: false,
      isGetUserDataSuccess: true,
      isGetUserDataFailure: false,
      userData: payload,
    }),
    [Actions.getUserDataFailure]: (state, { payload }) => ({
      ...state,
      isGetUserDataRequest: false,
      isGetUserDataSuccess: false,
      isGetUserDataFailure: true,
      errorMessages: payload,
    }),
    // #region : Local
    [Actions.resetWhenChangeInfoState]: (state) => ({
      ...state,
      isChangeInfoRequest: false,
      isChangeInfoSuccess: false,
      isChangeInfoFailure: false,
    }),
    [Actions.resetWhenChangeEmailState]: (state) => ({
      ...state,
      isConfirmChangeEmailRequest: false,
      isConfirmChangeEmailSuccess: false,
      isConfirmChangeEmailFailure: false,
    }),
    [Actions.resetWhenChangePhoneNumberState]: (state) => ({
      ...state,
      isChangePhoneNumberRequest: false,
      isChangePhoneNumberSuccess: false,
      isChangePhoneNumberFailure: false,
    }),
    [Actions.resetAuthState]: () => initialState,
    // #endregion
  },
  initialState,
);

export default reducer;
