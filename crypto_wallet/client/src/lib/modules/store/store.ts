import { createStore, applyMiddleware, compose } from 'redux'
import { router5Middleware } from 'redux-router5'
import createSagaMiddleware from 'redux-saga'
import { Router } from 'router5'

import rootReducer from './reducer'
import sagas from './sagas'

// const sagaMiddleware = createSagaMiddleware()
// const store = createStore(
//   rootReducer /* preloadedState, */,
//   composeEnhancers(applyMiddleware(sagaMiddleware))
// )

// sagas.forEach(saga => sagaMiddleware.run(saga))

// export default store

export default function configureStore(router: Router) {
  const sagaMiddleware = createSagaMiddleware()
  // @ts-ignore
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

  const createStoreWithMiddleware = composeEnhancers(
    applyMiddleware(router5Middleware(router), sagaMiddleware)
  )(createStore)

  const store = createStoreWithMiddleware(rootReducer)

  sagas.forEach(saga => sagaMiddleware.run(saga))

  return store
}
