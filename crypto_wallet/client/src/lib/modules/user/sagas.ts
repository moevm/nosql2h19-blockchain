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
    const { data } = yield call(fetchAPI, {
      path: 'users/register/',
      method: METHOD.POST,
      body: { ...action.payload, registration_date: new Date(), permission: 'user' }
    })

    console.log(data)
    yield put(registrationSuccess())
  } catch (error) {
    yield put(registrationFailure())
  }
}

function* requestAuthorization(action: AuthorizationRequestAction) {
  try {
    const { data } = yield call(fetchAPI, {
      path: 'users/login/',
      method: METHOD.POST,
      body: action.payload
    })

    yield put(
      authorizationSuccess({
        id: data._id,
        email: data.email,
        username: data.username,
        permission: data.permission,
        regDate: new Date(data.registration_date)
      })
    )
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
