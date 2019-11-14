import React, { Component, Fragment } from 'react'
import withStyles, { JSSProps } from 'react-jss'
import { hot } from 'react-hot-loader/root'

import compose from 'utils/compose'
import Helmet from 'containers/Helmet'
import Graphic from './components/Graphic'
import Menu from './components/Menu'
import styles from './styles'

interface OuterProps extends App.InjectedRouteProps {}
interface Props extends OuterProps, JSSProps<typeof styles> {}
interface State {}

class IndexPage extends Component<Props, State> {
  render() {
    const { classes } = this.props

    return (
      <Fragment>
        <Helmet title="Main" />
        <section className={classes.wrapper}>
          <Graphic />
          <Menu />
        </section>
      </Fragment>
    )
  }
}

export default compose<Props, OuterProps>(
  hot,
  withStyles(styles)
)(IndexPage)
