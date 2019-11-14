import React, { FC, useState, ReactNode } from 'react'
import cn from 'classnames'
import withStyles, { JSSProps } from 'react-jss'

import compose from 'lib/utils/compose'
import styles from './styles'

interface OuterProps {
  className?: string
  children: ReactNode
  onSubmitButtonClick: () => void
}

interface Props extends OuterProps, JSSProps<typeof styles> {}

const SubmitButton: FC<Props> = ({ classes, className, children, onSubmitButtonClick }) => (
  <button
    className={cn(classes.button, className)}
    type="button"
    aria-label="button for sending form"
    onClick={onSubmitButtonClick}
  >
    {children}
  </button>
)

export default compose<Props, OuterProps>(withStyles(styles))(SubmitButton)
