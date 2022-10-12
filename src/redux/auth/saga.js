/* eslint-disable import/no-extraneous-dependencies */
import { Auth } from 'aws-amplify';
import { call, put, takeLatest } from 'redux-saga/effects';
import { axiosMicroApiInstance } from '~/services';
import * as Actions from './actions';

function* signIn({ payload }) {
  try {
    const { username, password } = payload;
    const response = yield call(() => Auth.signIn(username, password));
    yield put(Actions.signInSuccess(response));
  } catch (err) {
    const message = [err];
    yield put(Actions.signInFailure(message));
  }
}

function* signUp({ payload }) {
  try {
    const { username } = payload;
    yield call(() => Auth.signIn(username.toLowerCase(), '123'));
  } catch (err) {
    if (err.code !== 'UserNotFoundException') {
      const message = [
        {
          code: 'EmailExistException',
          message:
            'This email already exists. Please try again with a new email address.',
        },
      ];
      yield put(Actions.signUpFailure(message));
      return;
    }
    try {
      const response = yield call(() => Auth.signUp(payload));
      yield put(Actions.signUpSuccess(response));
    } catch (e) {
      const message = [e];
      yield put(Actions.signUpFailure(message));
    }
  }
}

function* confirmRegisterAccount({ payload }) {
  try {
    const { username, code } = payload;
    const response = yield call(() => Auth.confirmSignUp(username, code));
    yield put(Actions.confirmRegisterAccountSuccess(response));
  } catch (err) {
    const message = [err];
    yield put(Actions.confirmRegisterAccountFailure(message));
  }
}

function* signOut() {
  try {
    const response = yield call(() => Auth.signOut());
    window.location = '/';
    yield put(Actions.signOutSuccess(response));
  } catch (err) {
    const message = [err];
    yield put(Actions.signOutFailure(message));
  }
}

function* forgotPassword({ payload }) {
  try {
    const { username } = payload;
    const response = yield call(() => Auth.forgotPassword(username));
    yield put(Actions.forgotPasswordSuccess(response));
  } catch (err) {
    const message = [err];
    yield put(Actions.forgotPasswordFailure(message));
  }
}

function* resetPassword({ payload }) {
  try {
    const { username, code, new_password } = payload;
    const response = yield call(() => Auth.forgotPasswordSubmit(username, code, new_password));
    yield put(Actions.resetPasswordSuccess(response));
  } catch (err) {
    const message = [err];
    yield put(Actions.resetPasswordFailure(message));
  }
}

function* changeInfo({ payload }) {
  try {
    const { password, newPassword, email } = payload;
    const user = yield call(() => Auth.currentAuthenticatedUser());
    if (user?.attributes?.email !== email) {
      try {
        yield call(() => Auth.signIn(email.toLowerCase(), '123'));
      } catch (e) {
        if (e.code !== 'UserNotFoundException') {
          const message = [
            { code: 'EmailExistException', message: 'Email is exist' },
          ];
          yield put(Actions.changeInfoFailure(message));
          return;
        }
        yield call(() => Auth.updateUserAttributes(user, {
          email,
        }));
      }
    }
    if (
      password !== ''
      && newPassword !== ''
      && password !== undefined
      && newPassword !== undefined
    ) {
      yield call(() => Auth.changePassword(user, password, newPassword));
    }
    yield put(Actions.changeInfoSuccess());
  } catch (e) {
    const message = [e];
    yield put(Actions.changeInfoFailure(message));
  }
}

function* confirmChangeEmail({ payload }) {
  try {
    const { code } = payload;
    yield call(() => Auth.verifyCurrentUserAttributeSubmit('email', code));
    yield put(Actions.confirmChangeEmailSuccess());
  } catch (e) {
    const message = [e];
    yield put(Actions.confirmChangeEmailFailure(message));
  }
}

function* changePhoneNumber({ payload }) {
  try {
    const user = yield call(() => Auth.currentAuthenticatedUser());
    yield call(() => Auth.updateUserAttributes(user, payload.attributes));
    yield put(Actions.changePhoneNumberSuccess());
  } catch (err) {
    const message = [err];
    yield put(Actions.changePhoneNumberFailure(message));
  }
}

function* getUserData({ payload }) {
  try {
    const response = yield call(() => axiosMicroApiInstance.get('/auth/get-user-data-by-email', { params: payload }));
    if (response?.status === 200) {
      yield put(Actions.getUserDataSuccess(response.data));
    }
  } catch (e) {
    if (e?.response?.data) {
      const { detail } = e.response.data;
      yield put(Actions.getUserDataFailure(detail));
    }
  }
}

// eslint-disable-next-line func-names
export default function* () {
  yield takeLatest(Actions.signInRequest, signIn);
  yield takeLatest(Actions.signUpRequest, signUp);
  yield takeLatest(
    Actions.confirmRegisterAccountRequest,
    confirmRegisterAccount,
  );
  yield takeLatest(Actions.signOutRequest, signOut);
  yield takeLatest(Actions.forgotPasswordRequest, forgotPassword);
  yield takeLatest(Actions.resetPasswordRequest, resetPassword);
  yield takeLatest(Actions.changeInfoRequest, changeInfo);
  yield takeLatest(Actions.confirmChangeEmailRequest, confirmChangeEmail);
  yield takeLatest(Actions.changePhoneNumberRequest, changePhoneNumber);
  yield takeLatest(Actions.getUserDataRequest, getUserData);
}
