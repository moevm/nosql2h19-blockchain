import { Action, ActionCreator } from 'redux'
import TYPES from './types'

export interface DataRequestAction extends Action<TYPES.DATA_REQUEST> {
  payload: string
}

export interface DataSuccessAction extends Action<TYPES.DATA_SUCCESS> {
  payload: Data.Chart
}

export interface DataFailureAction extends Action<TYPES.DATA_FAILURE> {
  error: string
}

export type ActionTypes = DataRequestAction | DataSuccessAction | DataFailureAction

export const dataRequest: ActionCreator<DataRequestAction> = (payload: string) => ({
  type: TYPES.DATA_REQUEST,
  payload
})

export const dataSuccess: ActionCreator<DataSuccessAction> = (payload: Data.Chart) => ({
  type: TYPES.DATA_SUCCESS,
  payload
})

export const dataError: ActionCreator<DataFailureAction> = (error: string) => ({
  type: TYPES.DATA_FAILURE,
  error
})
