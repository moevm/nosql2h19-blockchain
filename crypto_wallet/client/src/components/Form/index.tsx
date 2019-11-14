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

const Form: FC<Props> = ({ classes, className, children }) => {
  return (
    <form className={cn(classes.form, className)} method="POST">
      {children}
    </form>
  )
}

export default compose<Props, OuterProps>(withStyles(styles))(Form)
