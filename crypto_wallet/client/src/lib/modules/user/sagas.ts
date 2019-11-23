import { push } from 'react-router-redux'
import { put, call, takeLatest, all, select } from 'redux-saga/effects'

import fetchAPI from 'lib/services/fetchAPI'
import { METHOD } from 'constants/api'
import {
  RegistrationRequestAction,
  registrationSuccess,
  registrationFailure,
  AuthorizationRequestAction,
  authorizationSuccess,
  authorizationFailure,
  GetUserInfoAction,
  getUserInfo
} from './actions'
import TYPES from './types'

const getToken = (state: App.State) => state.user.token

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
      path: 'jwt_auth/authenticate/',
      method: METHOD.POST,
      body: action.payload
    })

    yield requestInfo(getUserInfo(data.token))

    yield put(
      authorizationSuccess({
        token: data.token
        // id: data._id,
        // email: data.email,
        // username: data.username,
        // permission: data.permission,
        // regDate: new Date(data.registration_date)
      })
    )
    yield put(push('/account'))
  } catch (error) {
    yield put(authorizationFailure())
  }
}

function* requestInfo(action: GetUserInfoAction) {
  try {
    const { data } = yield call(fetchAPI, {
      path: 'users/current/',
      token: action.payload.token
    })

    console.log(data)
  } catch (error) {}
}

export function* watcher() {
  yield all([
    takeLatest(TYPES.REG_REQUEST, requestRegistration),
    takeLatest(TYPES.AUTH_REQUEST, requestAuthorization)
  ])
}
