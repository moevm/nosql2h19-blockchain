import React, { FC, Fragment } from 'react'
import { Link } from 'react-router5'
import withStyles, { JSSProps } from 'react-jss'
import { hot } from 'react-hot-loader/root'

import compose from 'utils/compose'
import Helmet from 'containers/Helmet'
import AuthForm from './components/AuthForm'
import styles from './styles'

interface OuterProps extends App.InjectedRouteProps {}

interface Props extends OuterProps, JSSProps<typeof styles> {}

const Authorization: FC<Props> = ({ classes }) => (
  <Fragment>
    <Helmet title="Authorization" />
    <section className={classes.wrapper}>
      <AuthForm />
    </section>
  </Fragment>
)

export default compose<Props, OuterProps>(
  hot,
  withStyles(styles)
)(Authorization)
