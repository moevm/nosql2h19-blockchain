import React, { ComponentType } from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { Router, cloneRouter } from 'router5'
import browserPlugin from 'router5-plugin-browser'
import { Store } from 'redux'

// import RouterManager from 'services/router'
import configureStore from 'lib/modules/store/store'
import configureRouter from 'services/router'
import App, { OuterProps as AppOuterProps } from 'containers/App'

const renderApp = (Component: ComponentType<AppOuterProps>, router: Router, store: Store) => {
  render(
    <AppContainer>
      <Component router={router} store={store} />
    </AppContainer>,
    document.getElementById('root')
  )
}
// const router = cloneRouter(RouterManager.getInstance())
const router = configureRouter()
const store = configureStore(router)

router.usePlugin(browserPlugin())
router.start(window.location.pathname, (err, state) => {
  renderApp(App, router, store)
})
