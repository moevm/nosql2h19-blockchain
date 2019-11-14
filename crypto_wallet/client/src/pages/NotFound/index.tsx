import React, { Component, Fragment } from 'react'
import withStyles, { JSSProps } from 'react-jss'
import { hot } from 'react-hot-loader/root'

import compose from 'utils/compose'
import Helmet from 'containers/Helmet'
import styles from './styles'

interface OuterProps extends App.InjectedRouteProps {}
interface Props extends OuterProps, JSSProps<typeof styles> {}
interface State {}

class NotFoundPage extends Component<Props, State> {
  render() {
    return (
      <Fragment>
        <Helmet title="Страница не найдена" />
        <h1>Страница не найдена</h1>
      </Fragment>
    )
  }
}

export default compose<Props, OuterProps>(
  hot,
  withStyles(styles)
)(NotFoundPage)
