import { Reducer } from 'redux'

import TYPES from './types'
import { ActionTypes } from './actions'

export interface ChartState {
  currency: string
  x: string[]
  y: string[]
  // cache: Map<string, 
}

const initialState: ChartState = {
  currency: 'BTC',
  x: [],
  y: []
}

const reducer: Reducer<ChartState, ActionTypes> = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.DATA_SUCCESS: {
      return { ...state, ...action.payload }
    }
    case TYPES.CURRENCY_CHANGE: {
      return { ...state, currency: action.payload }
    }
    default:
      return state
  }
}

export default reducer
