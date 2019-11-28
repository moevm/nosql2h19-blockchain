import { Reducer } from 'redux'

import TYPES from './types'
import { ActionTypes } from './actions'

export type ChartState = Data.Chart

const initialState: ChartState = {
  currency: '',
  points: {
    x: [],
    y: []
  },
  cache: new Map<string, Data.Points>()
}

const reducer: Reducer<ChartState, ActionTypes> = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.DATA_SUCCESS: {
      return { ...state, ...action.payload }
    }
    default:
      return state
  }
}

export default reducer
