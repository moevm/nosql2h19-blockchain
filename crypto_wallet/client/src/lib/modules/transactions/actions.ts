import { Action, ActionCreator } from 'redux'
import TYPES from './types'

export interface TransactionsRequestAction extends Action<TYPES.TRANSACTIONS_REQUEST> {}

export interface TransactionsSuccessTableAction extends Action<TYPES.TRANSACTIONS_SUCCESS_TABLE> {
  payload: Data.Transactions
}

export interface TransactionsSuccessChartAction extends Action<TYPES.TRANSACTIONS_SUCCESS_CHART> {
  payload: Data.Transactions
}

export type ActionTypes =
  | TransactionsRequestAction
  | TransactionsSuccessTableAction
  | TransactionsSuccessChartAction

export const transactionsRequest: ActionCreator<TransactionsRequestAction> = () => ({
  type: TYPES.TRANSACTIONS_REQUEST
})

export const transactionsSuccessTable: ActionCreator<TransactionsSuccessTableAction> = (
  payload: Data.Transactions
) => ({
  type: TYPES.TRANSACTIONS_SUCCESS_TABLE,
  payload
})

export const transactionsSuccessChart: ActionCreator<TransactionsSuccessChartAction> = (
  payload: Data.Transactions
) => ({
  type: TYPES.TRANSACTIONS_SUCCESS_CHART,
  payload
})
