import React, { FC, InputHTMLAttributes } from 'react'
import cn from 'classnames'
import withStyles, { JSSProps } from 'react-jss'

import compose from 'lib/utils/compose'
import Input from 'components/Input'
import Select from 'components/Select'
import styles from './styles'

interface OuterProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string
  text: string
}

interface Props extends OuterProps, JSSProps<typeof styles> {}

const CurrencyInput: FC<Props> = ({ classes, className, text, ...props }) => {
  return (
    <div className={cn(classes.container, className)}>
      <p className={classes.text}>{text}</p>
      <Input className={classes.input} {...props} />
      <Select className={classes.select} />
    </div>
  )
}

export default compose<Props, OuterProps>(withStyles(styles))(CurrencyInput)
