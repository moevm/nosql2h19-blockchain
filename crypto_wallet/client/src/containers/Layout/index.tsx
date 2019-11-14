import React, { PureComponent, Fragment } from 'react'
import withStyles, { JSSProps } from 'react-jss'

import Helmet from 'containers/Helmet'
import Header from 'components/Header'
import Footer from 'components/Footer'
import styles from './styles'

interface OuterProps {}
interface Props extends JSSProps<typeof styles>, OuterProps {
  children: React.ReactNode
}

class Layout extends PureComponent<Props, {}> {
  render() {
    const { children, classes } = this.props

    return (
      <Fragment>
        <Helmet />
        <Header />
        <main className={classes.layout}>{children}</main>
        <Footer />
      </Fragment>
    )
  }
}

export default withStyles(styles)(Layout)
