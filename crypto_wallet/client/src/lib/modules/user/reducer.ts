import { Reducer } from 'redux'

import TYPES from './types'
import { ActionTypes } from './actions'

export type UserState = Data.User

const initialState: UserState = {
  token: '',
  id: '',
  email: '',
  username: '',
  password: '',
  permission: '',
  regDate: new Date()
}

const reducer: Reducer<UserState, ActionTypes> = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.REG_SUCCESS:
      return state
    case TYPES.AUTH_SUCCESS:
      return { ...state, token: action.payload }
    case TYPES.USER_INFO_SUCCESS:
      return { ...state, ...action.payload }
    default:
      return state
  }
}

export default reducer
