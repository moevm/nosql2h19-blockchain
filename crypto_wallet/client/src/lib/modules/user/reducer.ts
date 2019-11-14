import { Reducer } from 'redux'

import TYPES from './types'
import { ActionTypes } from './actions'

export interface UserState {}

const initialState = {}

const reducer: Reducer<UserState, ActionTypes> = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.REG_SUCCESS:
      return state
    case TYPES.AUTH_SUCCESS:
      return state
    default:
      return state
  }
}

export default reducer
