import React, { FC, useState } from 'react'
import cn from 'classnames'
import withStyles, { JSSProps } from 'react-jss'
import { connect, MapDispatchToProps } from 'react-redux'

import compose from 'lib/utils/compose'
import { moneySendRequest } from 'lib/modules/wallet/actions'
import Button from 'components/Button'
import styles from './styles'
import Form from 'components/Form'
import SubmitButton from 'components/SubmitButton'
import CurrencyInput from './components/CurrencyInput'

interface OuterProps {
  className?: string
}

interface DispatchProps {
  sendMoney: (info: Data.Exchange) => void
}

interface Props extends OuterProps, DispatchProps, JSSProps<typeof styles> {}

interface State {
  username: string
  currency: string
  count: string
}

const Exchange: FC<Props> = ({ classes, sendMoney }) => {
  const [exchange, setExchange] = useState<State>({
    username: 'Irene_Powers',
    currency: '',
    count: ''
  })

  const onButtonClick = () => {
    sendMoney({
      receiver: exchange.username,
      remits: [
        {
          currency: exchange.currency.toLocaleLowerCase(),
          amount: parseFloat(exchange.count)
        }
      ]
    })
  }

  return (
    <Form className={classes.form}>
      <h2 className={classes.header}>Send</h2>
      <p className={classes.info}>Enter username and value to send currency another user</p>

      <CurrencyInput
        className={classes.input}
        text="Receiver"
        placeholder="username"
        value={exchange.username}
        onChange={e => setExchange({ ...exchange, username: e.target.value })}
      />

      <CurrencyInput
        className={classes.input}
        text="Currency"
        placeholder="currencty"
        value={exchange.currency}
        onChange={e =>
          setExchange({
            ...exchange,
            currency: e.target.value
          })
        }
      />

      <CurrencyInput
        className={classes.input}
        text="Value"
        placeholder="0"
        value={exchange.count}
        onChange={e =>
          setExchange({
            ...exchange,
            count: e.target.value
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
  sendMoney: info => dispatch(moneySendRequest(info))
})

export default compose<Props, OuterProps>(
  connect(
    null,
    mapDispatchToProps
  ),
  withStyles(styles)
)(Exchange)
