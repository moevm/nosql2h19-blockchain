import { put, call, takeLatest, all } from 'redux-saga/effects'

import fetchAPI from 'lib/services/fetchAPI'
import { METHOD } from 'constants/api'
import {
  RegistrationRequestAction,
  registrationSuccess,
  registrationFailure,
  AuthorizationRequestAction,
  authorizationSuccess,
  authorizationFailure
} from './actions'
import TYPES from './types'

function* requestRegistration(action: RegistrationRequestAction) {
  try {
    const result = yield call(fetchAPI, {
      path: 'users/register/',
      method: METHOD.POST,
      body: action.payload
    })
    console.log(result)
    yield put(registrationSuccess())
  } catch (error) {
    yield put(registrationFailure())
  }
}

function* requestAuthorization(action: AuthorizationRequestAction) {
  try {
    const result = yield call(fetchAPI, {
      path: 'users/login/',
      method: METHOD.POST,
      body: action.payload
    })
    console.log(result)
    yield put(authorizationSuccess())
  } catch (error) {
    yield put(authorizationFailure())
  }
}

export function* watcher() {
  yield all([
    takeLatest(TYPES.REG_REQUEST, requestRegistration),
    takeLatest(TYPES.AUTH_REQUEST, requestAuthorization)
  ])
}
