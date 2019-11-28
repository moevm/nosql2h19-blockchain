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

export interface MoneySendRequestAction extends Action<TYPES.MONEY_SEND_REQUEST> {
  payload: Data.Exchange
}

export interface MoneySendSuccessAction extends Action<TYPES.MONEY_SEND_SUCCESS> {
  payload: Data.Wallet
}

export interface MoneyTopupRequestAction extends Action<TYPES.MONEY_TOPUP_REQUEST> {
  payload: Data.Topup
}

export type ActionTypes =
  | WalletRequestAction
  | WalletSuccessAction
  | WalletFailureAction
  | MoneySendRequestAction
  | MoneySendSuccessAction
  | MoneyTopupRequestAction

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

export const moneySendRequest: ActionCreator<MoneySendRequestAction> = (
  payload: Data.Exchange
) => ({
  type: TYPES.MONEY_SEND_REQUEST,
  payload
})

export const moneySendSuccess: ActionCreator<MoneySendSuccessAction> = (payload: Data.Wallet) => ({
  type: TYPES.MONEY_SEND_SUCCESS,
  payload
})

export const moneyTopupRequest: ActionCreator<MoneyTopupRequestAction> = (payload: Data.Topup) => ({
  type: TYPES.MONEY_TOPUP_REQUEST,
  payload
})
