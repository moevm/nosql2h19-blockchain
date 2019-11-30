import { takeLatest, put, call } from 'redux-saga/effects'

import fetchAPI from 'services/fetchAPI'
import { ENDPOINT } from 'constants/api'
import { transactionsSuccessTable, transactionsSuccessChart } from './actions'
import TYPES from './types'

function* fetchTransactionsTable() {
  try {
    const { data } = yield call(fetchAPI, { endpoint: ENDPOINT.TRANSACTIONS_TABLE })

    yield fetchTransactionsChart()
    yield put(transactionsSuccessTable(data))
  } catch (error) {
    console.error(error)
  }
}

function* fetchTransactionsChart() {
  try {
    const { data } = yield call(fetchAPI, { endpoint: ENDPOINT.TRANSACTIONS_CHART })
    const x = Object.keys(data).map(item => item.toUpperCase())
    const y = Object.values(data)

    yield put(transactionsSuccessChart({ chart: { x, y } }))
  } catch (error) {
    console.error(error)
  }
}

export default function* watcher() {
  yield takeLatest(TYPES.TRANSACTIONS_REQUEST, fetchTransactionsTable)
}
