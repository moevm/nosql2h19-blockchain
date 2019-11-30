import React, { FC, useMemo } from 'react'
import cn from 'classnames'
import withStyles, { JSSProps } from 'react-jss'
import { connect, MapStateToProps } from 'react-redux'

import compose from 'lib/utils/compose'
import styles from './styles'

interface OuterProps {
  className?: string
}

interface StateProps {
  currency: Data.Transactions['currency']
  date: Data.Transactions['date']
  values: Data.Transactions['values']
  sender: Data.Transactions['sender']
  receiver: Data.Transactions['receiver']
}

interface Props extends OuterProps, StateProps, JSSProps<typeof styles> {}

const parseDate = (str: string) => {
  const date = new Date(str)
  return `${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`
}

const Table: FC<Props> = ({ classes, className, currency, date, values, sender, receiver }) => {
  const memoTable = useMemo(
    () =>
      !!sender.length &&
      sender.map((sender, i) => (
        <tr key={i}>
          <th>{`${sender.slice(0, 12)}...`}</th>
          <th>{`${receiver[i].slice(0, 12)}...`}</th>
          <th>{values[i]}</th>
          <th>{currency[i].toUpperCase()}</th>
          <th>{parseDate(date[i])}</th>
        </tr>
      )),
    [sender.length]
  )

  return (
    <table className={cn(classes.table, className)}>
      <thead>
        <tr>
          <th>Sender</th>
          <th>Reciever</th>
          <th className={classes.count}>Count</th>
          <th className={classes.currency}>Currency</th>
          <th>Date</th>
        </tr>
      </thead>

      <tbody>{memoTable}</tbody>
    </table>
  )
}

const mapStateToProps: MapStateToProps<StateProps, Props, App.State> = state => ({
  currency: state.transactions.currency,
  date: state.transactions.date,
  values: state.transactions.values,
  sender: state.transactions.sender,
  receiver: state.transactions.receiver
})

export default compose<Props, OuterProps>(
  connect(mapStateToProps),
  withStyles(styles)
)(Table)
