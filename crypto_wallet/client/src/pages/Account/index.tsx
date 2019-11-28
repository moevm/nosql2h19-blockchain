import React, { FC, Fragment } from 'react'
import withStyles, { JSSProps } from 'react-jss'
import { hot } from 'react-hot-loader/root'

import compose from 'utils/compose'
import Helmet from 'containers/Helmet'
import UserInfo from './components/UserInfo'
import MoneyInfo from './components/MoneyInfo'
import Exchange from './components/Exchange'
import Topup from './components/Topup'
import styles from './styles'

interface OuterProps extends App.InjectedRouteProps {}

interface Props extends OuterProps, JSSProps<typeof styles> {}

const Account: FC<Props> = ({ classes }) => (
  <Fragment>
    <Helmet title="Wallet" />
    <section className={classes.wrapper}>
      <UserInfo className={classes.userInfo} />
      <Exchange />
      <MoneyInfo />
      <Topup />
    </section>
  </Fragment>
)

export default compose<Props, OuterProps>(
  hot,
  withStyles(styles)
)(Account)
