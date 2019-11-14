import React from 'react'
import { Route, constants } from 'router5'
import universal from 'react-universal-component'

import Loading from 'components/Loading'

export const routes: Route[] = [
  { name: 'index', path: '/' },
  { name: 'registration', path: '/register' },
  { name: 'authorization', path: '/login' },
  { name: 'account', path: '/wallet' }
]

// @ts-ignore
const universalRoute = (loadSpec, options = {}) =>
  universal<App.InjectedRouteProps>(loadSpec, {
    loading: () => <Loading />,
    loadingTransition: false,
    ignoreBabelRename: true,
    ...options
  })

export const routeComponents: { [key: string]: ReturnType<typeof universalRoute> } = {
  index: universalRoute(import('../../pages/Index')),
  registration: universalRoute(import('../../pages/Registration')),
  authorization: universalRoute(import('../../pages/Authorization')),
  account: universalRoute(import('../../pages/Account')),
  [constants.UNKNOWN_ROUTE]: universalRoute(import('../../pages/NotFound'))
}
