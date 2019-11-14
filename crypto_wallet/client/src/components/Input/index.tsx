import React, { FC, InputHTMLAttributes } from 'react'
import cn from 'classnames'
import withStyles, { JSSProps } from 'react-jss'

import compose from 'lib/utils/compose'
import styles from './styles'

interface OuterProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string
}

interface Props extends OuterProps, JSSProps<typeof styles> {}

const Input: FC<Props> = ({ classes, className, ...props }) => {
  // const [value, setValue] = useState<string>(startValue)

  // const onInputChange: ChangeEventHandler<HTMLInputElement> = e => {
  //   const value = e.target.value

  //   onFormInputChange(value)
  //   setValue(value)
  // }

  return <input className={cn(classes.input, className)} required {...props} />
}

export default compose<Props, OuterProps>(withStyles(styles))(Input)
