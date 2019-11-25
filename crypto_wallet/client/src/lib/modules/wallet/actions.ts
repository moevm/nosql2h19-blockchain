import { Action, ActionCreator } from 'redux'
import TYPES from './types'

export interface WalletRequestAction extends Action<TYPES.WALLET_REQUEST> {
  payload: {
    token: string
  }
}

export interface WalletSuccessAction extends Action<TYPES.WALLET_SUCCESS> {
  payload: Data.Wallet
}

export interface WalletFailureAction extends Action<TYPES.WALLET_FAILURE> {
  error: string
}

export type ActionTypes = WalletRequestAction | WalletSuccessAction | WalletFailureAction

export const walletRequest: ActionCreator<WalletRequestAction> = (token: string) => ({
  type: TYPES.WALLET_REQUEST,
  payload: {
    token
  }
})

export const walletSuccess: ActionCreator<WalletSuccessAction> = (payload: Data.Wallet) => ({
  type: TYPES.WALLET_SUCCESS,
  payload
})

export const walletFailure: ActionCreator<WalletFailureAction> = (error: string) => ({
  type: TYPES.WALLET_FAILURE,
  error
})
