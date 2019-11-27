import React, { FC } from 'react'
import withStyles, { JSSProps } from 'react-jss'
import { connect, MapDispatchToProps } from 'react-redux'

import compose from 'lib/utils/compose'
import { dataRequest } from 'lib/modules/chart/actions'
import styles from './styles'

interface OuterProps {}

interface DispatchProps {
  changeCurrency: (currency: string) => void
}

interface Props extends OuterProps, DispatchProps, JSSProps<typeof styles> {}

const currencies: string[] = ['BTC', 'ETH', 'XRP', 'BCH', 'LTC']

const Menu: FC<Props> = ({ classes, changeCurrency }) => {
  const onCurrencyButtonClick = (name: string) => () => {
    changeCurrency(name)
  }

  return (
    <div className={classes.wrapper}>
      <ul className={classes.list}>
        {currencies.map((item, index) => (
          <li key={index} className={classes.item}>
            <button
              className={classes.button}
              type="button"
              aria-label="change currency on graphic"
              onClick={onCurrencyButtonClick(item)}
            >
              {item}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

const mapDispatchToProps: MapDispatchToProps<DispatchProps, Props> = dispatch => ({
  changeCurrency: currency => dispatch(dataRequest(currency))
})

export default compose<Props, OuterProps>(
  connect(
    null,
    mapDispatchToProps
  ),
  withStyles(styles)
)(Menu)
