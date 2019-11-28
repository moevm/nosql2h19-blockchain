import { Reducer } from 'redux'

import TYPES from './types'
import { ActionTypes } from './actions'

export type WalletState = Data.Wallet

const initialState: WalletState = {
  list: []
}

const reducer: Reducer<WalletState, ActionTypes> = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.WALLET_SUCCESS:
      return { ...state, ...action.payload }
    default:
      return state
  }
}

export default reducer
