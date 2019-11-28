import { put, call, takeLatest, all } from 'redux-saga/effects'

import fetchAPI from 'lib/services/fetchAPI'
import { METHOD, ENDPOINT } from 'constants/api'
import { WalletRequestAction, walletSuccess, walletFailure } from './actions'
import TYPES from './types'

export function* requestWalletSaga(action: WalletRequestAction) {
  try {
    let { data } = yield call(fetchAPI, {
      endpoint: ENDPOINT.WALLET,
      token: action.payload.token
    })

    data = Object.entries(data).filter(item => item[0].length === 3 && item[0] !== '_id')
    yield put(walletSuccess({ list: data }))
  } catch (error) {
    yield put(walletFailure())
  }
}

export default function* watcher() {
  yield all([takeLatest(TYPES.WALLET_REQUEST, requestWalletSaga)])
}
