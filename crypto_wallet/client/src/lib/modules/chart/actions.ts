import { Action, ActionCreator } from 'redux'
import TYPES from './types'

export interface DataRequestAction extends Action<TYPES.DATA_REQUEST> {
  payload: string
}

export interface DataSuccessAction extends Action<TYPES.DATA_SUCCESS> {
  payload: any
}

export interface DataFailureAction extends Action<TYPES.DATA_FAILURE> {
  error: string
}

export interface CurrencyChangeAction extends Action<TYPES.CURRENCY_CHANGE> {
  payload: string
}

export type ActionTypes =
  | DataRequestAction
  | DataSuccessAction
  | DataFailureAction
  | CurrencyChangeAction

export const dataRequest: ActionCreator<DataRequestAction> = (payload: string) => ({
  type: TYPES.DATA_REQUEST,
  payload
})

export const dataSuccess: ActionCreator<DataSuccessAction> = (payload: any) => ({
  type: TYPES.DATA_SUCCESS,
  payload
})

export const dataError: ActionCreator<DataFailureAction> = (error: string) => ({
  type: TYPES.DATA_FAILURE,
  error
})

export const currencyChange: ActionCreator<CurrencyChangeAction> = (payload: string) => ({
  type: TYPES.CURRENCY_CHANGE,
  payload
})
