import { put, call, takeLatest, all } from 'redux-saga/effects'

import fetchAPI from 'lib/services/fetchAPI'
import { dataSuccess, dataError } from './actions'
import TYPES from './types'

function* requestData() {
  const key = '9WRKSH7X77NIRPL2'

  try {
    let { data } = yield call(fetchAPI, {
      otherUrl: `
      https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_MONTHLY&symbol=BTC&market=RUB&apikey=${key}`
    })
    data = Object.values(data)[1]
    const x = Object.keys(data)
      .map(item => item.split('-')[1])
      .reverse()
    const y = Object.values(data)
      .map(item => Object.values(item)[0])
      .reverse()

    yield put(dataSuccess({ x, y }))
  } catch (error) {
    yield put(dataError())
  }
}

export function* watcher() {
  yield all([takeLatest(TYPES.DATA_REQUEST, requestData)])
}
