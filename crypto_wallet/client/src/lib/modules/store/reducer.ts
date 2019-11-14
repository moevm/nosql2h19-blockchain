import { combineReducers } from 'redux'

import user from 'lib/modules/user/reducer'

const rootReducer = combineReducers({
  user
})

export default rootReducer
