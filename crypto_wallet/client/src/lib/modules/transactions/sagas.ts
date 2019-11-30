import { takeLatest, put, call } from 'redux-saga/effects'

import fetchAPI from 'services/fetchAPI'
import { ENDPOINT } from 'constants/api'
import { transactionsSuccess } from './actions'
import TYPES from './types'

function* fetchTransactionsTable() {
  try {
    const { data } = yield call(fetchAPI, { endpoint: ENDPOINT.TRANSACTIONS_TABLE })

    yield put(transactionsSuccess(data))
    yield fetchTransactionsChart()
  } catch (error) {}
}

function* fetchTransactionsChart() {
  try {
    const { data } = yield call(fetchAPI, { endpoint: ENDPOINT.TRANSACTIONS_CHART })

    console.log(data)
    // yield put(transactionsSuccess(data))
  } catch (error) {}
}

export default function* watcher() {
  yield takeLatest(TYPES.TRANSACTIONS_REQUEST, fetchTransactionsTable)
}
