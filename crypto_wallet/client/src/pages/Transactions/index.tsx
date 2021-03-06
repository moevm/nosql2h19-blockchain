import React, { FC, useEffect } from 'react'
import { hot } from 'react-hot-loader/root'
import withStyles, { JSSProps } from 'react-jss'
import { connect, MapDispatchToProps } from 'react-redux'

import compose from 'lib/utils/compose'
import { transactionsRequest } from 'lib/modules/transactions/actions'
import Table from './components/Table'
import Chart from './components/Chart'
import Buttons from './components/Buttons'
import styles from './styles'

interface OuterProps {
  className?: string
}

interface DispatchProps {
  requestTransactions: () => void
}

interface Props extends OuterProps, DispatchProps, JSSProps<typeof styles> {}

const Transactions: FC<Props> = ({ classes, requestTransactions }) => {
  useEffect(() => {
    requestTransactions()
  }, [])

  return (
    <section className={classes.container}>
      <h1 className={classes.title}>Statistics</h1>
      <Table />
      <Chart />
      <Buttons />
    </section>
  )
}

const mapDispatchToProps: MapDispatchToProps<DispatchProps, Props> = dispatch => ({
  requestTransactions: () => dispatch(transactionsRequest())
})

export default compose<Props, OuterProps>(
  hot,
  connect(
    null,
    mapDispatchToProps
  ),
  withStyles(styles)
)(Transactions)
