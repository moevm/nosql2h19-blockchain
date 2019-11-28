import React, { FC, useState } from 'react'
import cn from 'classnames'
import withStyles, { JSSProps } from 'react-jss'
import { connect, MapDispatchToProps } from 'react-redux'

import compose from 'lib/utils/compose'
import { moneyTopupRequest } from 'lib/modules/wallet/actions'
import Form from 'components/Form'
import SubmitButton from 'components/SubmitButton'
import CurrencyInput from '../Exchange/components/CurrencyInput'
import styles from './styles'

interface OuterProps {
  className?: string
}

interface DispatchProps {
  topupMoney: (info: Data.Topup) => void
}

interface Props extends OuterProps, DispatchProps, JSSProps<typeof styles> {}

const Topup: FC<Props> = ({ classes, className, topupMoney }) => {
  const [exchange, setExchange] = useState<Data.Topup>({
    remits: [{ currency: 'btc', amount: 0 }]
  })

  const onButtonClick = () => {
    topupMoney(exchange)
  }

  return (
    <Form className={classes.form}>
      <h2 className={classes.header}>Topup</h2>
      <p className={classes.info}>Enter value to topup currency in your wallet</p>

      <CurrencyInput
        className={classes.input}
        text="Value"
        placeholder="0"
        value={exchange.remits[0].amount}
        onChange={e =>
          setExchange({
            ...exchange,
            remits: [{ currency: 'btc', amount: parseFloat(e.target.value) }]
          })
        }
      />

      <SubmitButton className={classes.button} onSubmitButtonClick={onButtonClick}>
        Send
      </SubmitButton>
    </Form>
  )
}

const mapDispatchToProps: MapDispatchToProps<DispatchProps, Props> = dispatch => ({
  topupMoney: info => dispatch(moneyTopupRequest(info))
})

export default compose<Props, OuterProps>(
  connect(
    null,
    mapDispatchToProps
  ),
  withStyles(styles)
)(Topup)
