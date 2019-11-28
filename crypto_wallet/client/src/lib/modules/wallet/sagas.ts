import { put, call, takeLatest, all, select } from 'redux-saga/effects'

import fetchAPI from 'lib/services/fetchAPI'
import { METHOD, ENDPOINT } from 'constants/api'
import { tokenSelector } from './selectors'
import {
  WalletRequestAction,
  walletSuccess,
  walletFailure,
  MoneySendRequestAction,
  moneySendSuccess
} from './actions'
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

function* sendMoney(action: MoneySendRequestAction) {
  try {
    const token = yield select(tokenSelector)
    console.log(token)

    const { data } = yield call(fetchAPI, {
      endpoint: ENDPOINT.SEND,
      token,
      method: METHOD.POST,
      body: action.payload
    })
    console.log(data)
    yield put(moneySendSuccess())
  } catch (error) {}
}

export default function* watcher() {
  yield all([
    takeLatest(TYPES.WALLET_REQUEST, requestWalletSaga),
    takeLatest(TYPES.MONEY_SEND_REQUEST, sendMoney)
  ])
}
