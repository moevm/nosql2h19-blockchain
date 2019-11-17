import { Reducer } from 'redux'

import TYPES from './types'
import { ActionTypes } from './actions'

export interface ChartState {
  x: string[]
  y: string[]
}

const initialState: ChartState = {
  x: [],
  y: []
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
