import React, { FC } from 'react'
import withStyles, { JSSProps } from 'react-jss'
import { Link } from 'react-router5'

import compose from 'lib/utils/compose'
import { MAIN_URL } from 'constants/api'
// import logo from 'assets/images/logo.svg'
import styles from './styles'

interface OuterProps {}

interface Props extends OuterProps, JSSProps<typeof styles> {}

const Header: FC<Props> = ({ classes }) => (
  <header className={classes.container}>
    <a className={classes.logoAnchor} href={MAIN_URL} aria-label="link to main page">
      <img className={classes.logoImage} src="" alt="logo image" />
    </a>
    <Link className={classes.signInAnchor} routeName="authorization">
      Sign in
    </Link>
    <Link className={classes.signUpAnchor} routeName="registration">
      Sign up
    </Link>
  </header>
)

export default compose<Props, OuterProps>(withStyles(styles))(Header)
