import { Reducer } from 'redux'

import TYPES from './types'
import { ActionTypes } from './actions'

export type UserState = Data.User

const initialState: UserState = {
  id: '0',
  email: 'dummy@mail.com',
  username: 'dummy',
  permission: 'user',
  regDate: new Date()
}

const reducer: Reducer<UserState, ActionTypes> = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.REG_SUCCESS:
      return state
    case TYPES.AUTH_SUCCESS:
      return { ...state, ...action.payload }
    default:
      return state
  }
}

export default reducer
