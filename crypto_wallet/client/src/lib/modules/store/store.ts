import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'

import rootReducer from './reducer'
import sagas from './sagas'

const sagaMiddleware = createSagaMiddleware()
// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
  rootReducer /* preloadedState, */,
  composeEnhancers(applyMiddleware(sagaMiddleware))
)

sagas.forEach(saga => sagaMiddleware.run(saga))

export default store
