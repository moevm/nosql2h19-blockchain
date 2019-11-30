import { Reducer } from 'redux'

import TYPES from './types'
import { ActionTypes } from './actions'

export type TransactionsState = Data.Transactions

const initialState: TransactionsState = {
  currency: ['eth'],
  date: ['2019-11-29T20:52:26.452688'],
  receiver: ['5aX9eHn86hvE5ELxvoAC99LJpdNmAu2g7FCrWoezd7Ez'],
  sender: ['jeT9jxWGPbB7M2eKGorpkjsnREVpB6Mysj7tg5gLRWC'],
  values: [7]
}

const reducer: Reducer<TransactionsState, ActionTypes> = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.TRANSACTIONS_SUCCESS: {
      return {
        ...state,
        currency: action.payload.currency,
        date: action.payload.date,
        receiver: action.payload.receiver,
        sender: action.payload.sender,
        values: action.payload.values
      }
    }
    default:
      return state
  }
}

export default reducer
