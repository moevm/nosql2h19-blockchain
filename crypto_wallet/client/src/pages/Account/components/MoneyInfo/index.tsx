import React, { FC } from 'react'
import cn from 'classnames'
import withStyles, { JSSProps } from 'react-jss'
import { connect, MapStateToProps } from 'react-redux'

import compose from 'lib/utils/compose'
import styles from './styles'

interface OuterProps {
  className?: string
}

interface StateProps {
  currencies: Data.Wallet['list']
}

interface Props extends OuterProps, StateProps, JSSProps<typeof styles> {}

const MoneyInfo: FC<Props> = ({ classes, className, currencies }) => {
  const parseData = () => {
    return currencies.map((currency, index) => (
      <tr key={index} className={classes.tr}>
        <td className={classes.td}>{currency[0].toUpperCase()}</td>
        <td className={classes.td}>{currency[1]}</td>
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

const mapStateToProps: MapStateToProps<StateProps, Props, App.State> = state => ({
  currencies: state.wallet.list
})

export default compose<Props, OuterProps>(
  connect(mapStateToProps),
  withStyles(styles)
)(MoneyInfo)
