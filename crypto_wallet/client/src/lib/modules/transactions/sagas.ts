import { takeLatest, put, call, all } from 'redux-saga/effects'

import fetchAPI from 'services/fetchAPI'
import { ENDPOINT, METHOD } from 'constants/api'
import { transactionsSuccessTable, transactionsSuccessChart, ExportFileAction } from './actions'
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

function* fetchExportFile(action: ExportFileAction) {
  try {
    const answer = yield call(fetchAPI, {
      headers: { 'Content-Type': 'multipart/form-data' },
      endpoint: '/transactions/import_db',
      method: METHOD.POST,
      body: action.payload
    })
  } catch (error) {
    console.error(error.message)
  }
}

export default function* watcher() {
  yield all([
    takeLatest(TYPES.TRANSACTIONS_REQUEST, fetchTransactionsTable),
    takeLatest(TYPES.EXPORT_FILE, fetchExportFile)
  ])
}
