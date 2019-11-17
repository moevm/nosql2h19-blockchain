import { combineReducers } from 'redux'

import user from 'lib/modules/user/reducer'
import chart from 'lib/modules/chart/reducer'

const rootReducer = combineReducers({
  user,
  chart
})

export default rootReducer
