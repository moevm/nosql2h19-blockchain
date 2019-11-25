import { put, call, takeLatest, all } from 'redux-saga/effects'

import fetchAPI from 'lib/services/fetchAPI'
import { METHOD, ENDPOINT } from 'constants/api'
import { WalletRequestAction, walletSuccess, walletFailure } from './actions'
import TYPES from './types'

function* requestWallet(action: WalletRequestAction) {
  try {
    const { data } = yield call(fetchAPI, {
      endpoint: ENDPOINT.WALLET,
      token: action.payload.token
    })

    yield put(walletSuccess())
  } catch (error) {
    yield put(walletFailure())
  }
}

export function* watcher() {
  yield all([takeLatest(TYPES.WALLET_REQUEST, requestWallet)])
}
