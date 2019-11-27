import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { constants, Router, SubscribeState } from 'router5'
// import { routeNode } from 'react-router5'
import { createRouteNodeSelector } from 'redux-router5'

import compose from 'utils/compose'
import getRouteComponent from 'utils/getRouteComponent'
import Layout from 'containers/Layout'

interface OuterProps {}
interface WithRouteHOCProps extends SubscribeState {
  router: Router
}
interface Props extends WithRouteHOCProps, OuterProps {}
interface State {}

class AppRouter extends PureComponent<Props, State> {
  componentDidMount() {
    const { route } = this.props

    const routeComponent = getRouteComponent(route ? route.name : constants.UNKNOWN_ROUTE)
    if (routeComponent.preload) routeComponent.preload()
  }

  render() {
    const { route, previousRoute } = this.props

    const CurrentRoute = getRouteComponent(route ? route.name : constants.UNKNOWN_ROUTE)

    return (
      <Layout>
        <CurrentRoute route={route} previousRoute={previousRoute} />
      </Layout>
    )
  }
}

export default compose<Props, OuterProps>(connect(createRouteNodeSelector('')))(AppRouter)
