import { push } from 'react-router-redux'
import { put, call, takeLatest, all, select } from 'redux-saga/effects'

import fetchAPI from 'lib/services/fetchAPI'
import { METHOD, ENDPOINT } from 'constants/api'
import { walletRequest } from 'lib/modules/wallet/actions'
import {
  RegistrationRequestAction,
  registrationSuccess,
  registrationFailure,
  AuthorizationRequestAction,
  authorizationSuccess,
  authorizationFailure,
  UserInfoRequestAction,
  UserInfoRequest,
  UserInfoSuccess
} from './actions'
import TYPES from './types'

// const getToken = (state: App.State) => state.user.token

function* requestRegistration(action: RegistrationRequestAction) {
  try {
    const { data } = yield call(fetchAPI, {
      endpoint: ENDPOINT.REG,
      method: METHOD.POST,
      body: { ...action.payload, registration_date: new Date(), permission: 'user' }
    })

    yield put(registrationSuccess())
  } catch (error) {
    yield put(registrationFailure())
  }
}

function* requestAuthorization(action: AuthorizationRequestAction) {
  try {
    const { data } = yield call(fetchAPI, {
      endpoint: ENDPOINT.AUTH,
      method: METHOD.POST,
      body: action.payload
    })

    yield requestInfo(UserInfoRequest(data.token))
    yield put(walletRequest(data.token))
    yield put(authorizationSuccess({ token: data.token }))
  } catch (error) {
    yield put(authorizationFailure())
  }
}

function* requestInfo(action: UserInfoRequestAction) {
  try {
    const { data } = yield call(fetchAPI, {
      endpoint: ENDPOINT.INFO,
      token: action.payload.token
    })

    yield put(
      UserInfoSuccess({
        id: data._id,
        email: data.email,
        username: data.username,
        password: data.password,
        permission: data.permission,
        regDate: new Date(data.registration_date)
      })
    )
  } catch (error) {}
}

export function* watcher() {
  yield all([
    takeLatest(TYPES.REG_REQUEST, requestRegistration),
    takeLatest(TYPES.AUTH_REQUEST, requestAuthorization)
  ])
}
