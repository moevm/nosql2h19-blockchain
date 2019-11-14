import React, { FC } from 'react'
import cn from 'classnames'
import withStyles, { JSSProps } from 'react-jss'

import compose from 'lib/utils/compose'
import Input from 'components/Input'
import Select from 'components/Select'
import styles from './styles'

interface OuterProps {
  className?: string
  text: string
  ph: string
  value: string
  onInputChange: (str: string) => void
}

interface Props extends OuterProps, JSSProps<typeof styles> {}

const CurrencyInput: FC<Props> = ({ classes, className, text, ph, value, onInputChange }) => {
  return (
    <div className={cn(classes.container, className)}>
      <p className={classes.text}>{text}</p>
      <Input className={classes.input} ph={ph} value={value} onInputChange={onInputChange} />
      <Select className={classes.select} />
    </div>
  )
}

export default compose<Props, OuterProps>(withStyles(styles))(CurrencyInput)
