import React, { FC } from 'react'
import withStyles, { JSSProps } from 'react-jss'
import { Link } from 'react-router5'

import compose from 'lib/utils/compose'
import styles from './styles'

interface OuterProps {}

interface Props extends OuterProps, JSSProps<typeof styles> {}

const Footer: FC<Props> = ({ classes }) => (
  <footer className={classes.container}>
    <h2 className={classes.title}>Footer</h2>
    <Link routeName="index">Main</Link>
    <Link routeName="registration">Registration</Link>
    <Link routeName="authorization">Authorization</Link>
    <Link routeName="account">Account</Link>
  </footer>
)

export default compose<Props, OuterProps>(withStyles(styles))(Footer)
