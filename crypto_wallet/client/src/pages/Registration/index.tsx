import React, { FC, Fragment } from 'react'
import withStyles, { JSSProps } from 'react-jss'
import { hot } from 'react-hot-loader/root'

import compose from 'utils/compose'
import Helmet from 'containers/Helmet'
import RegForm from './components/RegForm'
import styles from './styles'

interface OuterProps extends App.InjectedRouteProps {}

interface Props extends OuterProps, JSSProps<typeof styles> {}

const Registration: FC<Props> = ({ classes }) => (
  <Fragment>
    <Helmet title="Registration" />
    <section className={classes.wrapper}>
      <RegForm />
    </section>
  </Fragment>
)

export default compose<Props, OuterProps>(
  hot,
  withStyles(styles)
)(Registration)
