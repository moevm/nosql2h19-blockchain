import { Action, ActionCreator } from 'redux'
import TYPES from './types'

export interface TransactionsRequestAction extends Action<TYPES.TRANSACTIONS_REQUEST> {}

export interface TransactionsSuccessAction extends Action<TYPES.TRANSACTIONS_SUCCESS> {
  payload: Data.Transactions
}

export type ActionTypes = TransactionsRequestAction | TransactionsSuccessAction

export const transactionsRequest: ActionCreator<TransactionsRequestAction> = () => ({
  type: TYPES.TRANSACTIONS_REQUEST
})

export const transactionsSuccess: ActionCreator<TransactionsSuccessAction> = (
  payload: Data.Transactions
) => ({
  type: TYPES.TRANSACTIONS_SUCCESS,
  payload
})
