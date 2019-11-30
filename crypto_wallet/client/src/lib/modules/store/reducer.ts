import { combineReducers } from 'redux'
import { router5Reducer } from 'redux-router5'

import user from 'lib/modules/user/reducer'
import chart from 'lib/modules/chart/reducer'
import wallet from 'lib/modules/wallet/reducer'
import transactions from 'lib/modules/transactions/reducer'

const rootReducer = combineReducers({
  router: router5Reducer,
  user,
  chart,
  wallet,
  transactions
})

export default rootReducer
