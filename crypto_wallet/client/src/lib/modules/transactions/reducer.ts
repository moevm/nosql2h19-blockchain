import { Reducer } from 'redux'

import TYPES from './types'
import { ActionTypes } from './actions'

export type TransactionsState = Data.Transactions

const initialState: TransactionsState = {
  currency: [],
  date: [],
  receiver: [],
  sender: [],
  values: [],
  chart: {
    x: [],
    y: []
  }
}

const reducer: Reducer<TransactionsState, ActionTypes> = (state = initialState, action) => {
  console.log(action)
  switch (action.type) {
    case TYPES.TRANSACTIONS_SUCCESS_TABLE: {
      return {
        ...state,
        currency: action.payload.currency,
        date: action.payload.date,
        receiver: action.payload.receiver,
        sender: action.payload.sender,
        values: action.payload.values
      }
    }
    case TYPES.TRANSACTIONS_SUCCESS_CHART: {
      return {
        ...state,
        chart: action.payload.chart
      }
    }
    default:
      return state
  }
}

export default reducer
