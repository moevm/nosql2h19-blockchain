import React, { FC, useState, ChangeEventHandler } from 'react'
import cn from 'classnames'
import withStyles, { JSSProps } from 'react-jss'

import compose from 'lib/utils/compose'
import styles from './styles'

interface OuterProps {
  className?: string
  type?: string
  ph?: string
  value?: string
  onInputChange: (str: string) => void
}

interface Props extends OuterProps, JSSProps<typeof styles> {}

const Input: FC<Props> = ({ classes, className, type, ph, value = '', onInputChange }) => {
  // const [value, setValue] = useState<string>(startValue)

  // const onInputChange: ChangeEventHandler<HTMLInputElement> = e => {
  //   const value = e.target.value

  //   onFormInputChange(value)
  //   setValue(value)
  // }

  return (
    <input
      className={cn(classes.input, className)}
      type={type}
      placeholder={ph}
      value={value}
      required
      onChange={e => onInputChange(e.target.value)}
    />
  )
}

export default compose<Props, OuterProps>(withStyles(styles))(Input)
