import { put, call, takeLatest, all, select } from 'redux-saga/effects'

import fetchAPI from 'lib/services/fetchAPI'
// import { cacheSelector } from './selectors'
import { DataRequestAction, dataSuccess, dataError } from './actions'
import TYPES from './types'

function* requestData(action: DataRequestAction) {
  const key = '9WRKSH7X77NIRPL2'
  const currency = action.payload

  try {
    // const cacheValue = yield select(cacheSelector)
    // console.log(cacheValue)

    let { data } = yield call(fetchAPI, {
      otherUrl: `
      https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_MONTHLY&symbol=${currency}&market=RUB&apikey=${key}`
    })

    data = Object.values(data)[1]

    const points = {
      x: Object.keys(data)
        .map(item => item.split('-')[1])
        .reverse(),
      y: Object.values(data)
        .map(item => Object.values(item)[0])
        .reverse()
    }

    yield put(dataSuccess({ currency, points }))
  } catch (error) {
    yield put(dataError())
  }
}

export default function* watcher() {
  yield all([takeLatest(TYPES.DATA_REQUEST, requestData)])
}
