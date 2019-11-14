import React, { FC } from 'react'
import cn from 'classnames'
import withStyles, { JSSProps } from 'react-jss'

import compose from 'lib/utils/compose'
import styles from './styles'

interface OuterProps {
  className?: string
}

interface Props extends OuterProps, JSSProps<typeof styles> {}

const basicCurrency = ['btc', 'usd', 'rub']

const Select: FC<Props> = ({ classes, className }) => {
  return (
    <select size={1} className={cn(classes.select, className)}>
      {basicCurrency.map((item, index) => (
        <option key={index} className={classes.option}>
          {item}
        </option>
      ))}
    </select>
  )
}

export default compose<Props, OuterProps>(withStyles(styles))(Select)
