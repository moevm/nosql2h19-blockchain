import React, { FC } from 'react'
import withStyles, { JSSProps } from 'react-jss'
import { connect, MapStateToProps } from 'react-redux'
import { Link } from 'react-router5'

import compose from 'lib/utils/compose'
import { MAIN_URL } from 'constants/api'
// import logo from 'assets/images/logo.svg'
import styles from './styles'

interface OuterProps {}

interface StateProps {
  username: Data.User['username']
}

interface Props extends OuterProps, StateProps, JSSProps<typeof styles> {}

const Header: FC<Props> = ({ classes, username }) => (
  <header className={classes.container}>
    <a className={classes.logoAnchor} href={MAIN_URL} aria-label="link to main page">
      <img className={classes.logoImage} src="" alt="logo image" />
    </a>

    {username ? (
      <Link className={classes.accountAnchor} routeName="account" aria-label="">
        {username}
      </Link>
    ) : (
      <div className={classes.anchorWrapper}>
        <Link className={classes.signInAnchor} routeName="authorization">
          Sign in
        </Link>
        <Link className={classes.signUpAnchor} routeName="registration">
          Sign up
        </Link>
      </div>
    )}
  </header>
)

const mapStateToProps: MapStateToProps<StateProps, Props, App.State> = state => ({
  username: state.user.username
})

export default compose<Props, OuterProps>(
  connect(mapStateToProps),
  withStyles(styles)
)(Header)
