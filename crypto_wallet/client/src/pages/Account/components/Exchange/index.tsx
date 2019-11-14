import React, { FC, useState } from 'react'
import cn from 'classnames'
import withStyles, { JSSProps } from 'react-jss'

import compose from 'lib/utils/compose'
import Button from 'components/Button'
import styles from './styles'
import Form from 'components/Form'
import SubmitButton from 'components/SubmitButton'
import CurrencyInput from './components/CurrencyInput'

interface OuterProps {
  className?: string
}

interface Props extends OuterProps, JSSProps<typeof styles> {}

const Exchange: FC<Props> = ({ classes }) => {
  const [exchange, setExchange] = useState<Data.Exchange>({ value1: '', value2: '' })

  const onButtonClick = () => {}

  return (
    <Form className={classes.form}>
      <h2 className={classes.header}>Exchange</h2>
      <p className={classes.info}>Select currency pair to exchange</p>

      <CurrencyInput
        className={classes.input}
        text="I give"
        placeholder="0"
        value={exchange.value1}
        onChange={e => setExchange({ ...exchange, value1: e.target.value })}
      />

      <CurrencyInput
        className={classes.input}
        text="I receive"
        placeholder="0"
        value={exchange.value2}
        onChange={e => setExchange({ ...exchange, value2: e.target.value })}
      />

      <SubmitButton className={classes.button} onSubmitButtonClick={onButtonClick}>
        Exchange
      </SubmitButton>
    </Form>
  )
}

export default compose<Props, OuterProps>(withStyles(styles))(Exchange)
