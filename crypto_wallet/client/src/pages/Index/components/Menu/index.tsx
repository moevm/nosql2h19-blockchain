import React, { FC } from 'react'
import withStyles, { JSSProps } from 'react-jss'

import compose from 'lib/utils/compose'
import styles from './styles'

interface OuterProps {}

interface Props extends OuterProps, JSSProps<typeof styles> {}

const Menu: FC<Props> = ({ classes }) => {
  return (
    <div className={classes.wrapper}>
      <h2>Menu</h2>
    </div>
  )
}

export default compose<Props, OuterProps>(withStyles(styles))(Menu)
