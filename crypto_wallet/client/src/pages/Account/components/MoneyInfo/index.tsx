import React, { FC } from 'react'
import cn from 'classnames'
import withStyles, { JSSProps } from 'react-jss'

import compose from 'lib/utils/compose'
import styles from './styles'

interface OuterProps {
  className?: string
}

interface Props extends OuterProps, JSSProps<typeof styles> {}

const data = [
  {
    name: 'BTC',
    value: 0.0001342
  },
  {
    name: 'USD',
    value: 150.53
  },
  {
    name: 'EUR',
    value: 0
  }
]

const MoneyInfo: FC<Props> = ({ classes, className }) => {
  const parseData = () => {
    return data.map((item, index) => (
      <tr key={index} className={classes.tr}>
        <td className={classes.td}>{item.name}</td>
        <td className={classes.td}>{item.value}</td>
      </tr>
    ))
  }

  return (
    <div className={cn(classes.wrapper, className)}>
      <h2 className={classes.title}>Wallet</h2>
      <table className={classes.table}>
        <tbody className={classes.tBody}>{parseData()}</tbody>
      </table>
    </div>
  )
}

export default compose<Props, OuterProps>(withStyles(styles))(MoneyInfo)
