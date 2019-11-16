import { put, call, takeLatest, all } from 'redux-saga/effects'

import fetchAPI from 'lib/services/fetchAPI'
import { METHOD } from 'constants/api'
import { WalletRequestAction } from './actions'
import TYPES from './types'

function* requestWallet(action: WalletRequestAction) {
  try {
    const { data } = yield call(fetchAPI, {
      path: `users/${action.payload}/wallet/`
    })

    console.log(data)
  } catch (error) {
    console.error(error)
  }
}

export function* watcher() {
  yield all([takeLatest(TYPES.WALLET_REQUEST, requestWallet)])
}
