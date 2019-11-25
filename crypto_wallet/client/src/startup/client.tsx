import React, { ComponentType } from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { Router, cloneRouter } from 'router5'
import browserPlugin from 'router5-plugin-browser'

import RouterManager from 'services/router'
import App, { OuterProps as AppOuterProps } from 'containers/App'

const renderApp = (Component: ComponentType<AppOuterProps>, router: Router) => {
  render(
    <AppContainer>
      <Component router={router} />
    </AppContainer>,
    document.getElementById('root')
  )
}
const router = cloneRouter(RouterManager.getInstance())
console.log(router)

router.usePlugin(browserPlugin())
router.start(window.location.pathname, (err, state) => {
  renderApp(App, router)
})
