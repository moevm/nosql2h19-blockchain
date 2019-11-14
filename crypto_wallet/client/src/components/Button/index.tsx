import React, { FC, ReactNode } from 'react'
import cn from 'classnames'
import withStyles, { JSSProps } from 'react-jss'

import compose from 'lib/utils/compose'
import styles from './styles'

interface OuterProps {
  className?: string
  children: ReactNode
}

interface Props extends OuterProps, JSSProps<typeof styles> {}

const Button: FC<Props> = ({ classes, className, children }) => {
  return (
    <button className={classes.button} type="button" aria-label="">
      {children}
    </button>
  )
}

export default compose<Props, OuterProps>(withStyles(styles))(Button)
