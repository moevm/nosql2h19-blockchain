import React, { FC } from 'react'
import { hot } from 'react-hot-loader/root'
import { ThemeProvider as MUIThemeProvider } from '@material-ui/styles'
import { ThemeProvider } from 'react-jss'
import { Router as Router5 } from 'router5'
import { RouterProvider } from 'react-router5'
import { Provider } from 'react-redux'

import { defaultTheme, muiDefaultTheme } from 'lib/theme'
import store from 'lib/modules/store/store'
import Router from 'containers/Router'

export interface OuterProps {
  router: Router5
}
interface Props extends OuterProps {}

const App: FC<Props> = ({ router }: Props) => {
  return (
    <Provider store={store}>
      <MUIThemeProvider theme={muiDefaultTheme}>
        <ThemeProvider theme={defaultTheme}>
          <RouterProvider router={router}>
            <Router />
          </RouterProvider>
        </ThemeProvider>
      </MUIThemeProvider>
    </Provider>
  )
}

export default hot(App)
