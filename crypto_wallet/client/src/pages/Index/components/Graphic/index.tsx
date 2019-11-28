import React, { FC, useEffect } from 'react'
import ReactEcharts from 'echarts-for-react'
import withStyles, { JSSProps } from 'react-jss'
import { connect, MapStateToProps, MapDispatchToProps } from 'react-redux'

import compose from 'lib/utils/compose'
import { dataRequest } from 'lib/modules/chart/actions'
import styles from './styles'

interface OuterProps {}

interface StateProps {
  currency: Data.Chart['currency']
  points: Data.Chart['points']
}

interface DispatchProps {
  requestData: (currency: string) => void
}

interface Props extends OuterProps, StateProps, DispatchProps, JSSProps<typeof styles> {}

const Graphic: FC<Props> = ({ classes, currency, points, requestData }) => {
  useEffect(() => {
    requestData('BTC')
  }, [])

  return (
    <div className={classes.wrapper}>
      <ReactEcharts
        className={classes.chart}
        option={{
          xAxis: {
            data: points.x
          },
          yAxis: {
            type: 'value'
          },
          series: [
            {
              data: points.y,
              type: 'line'
            }
          ]
        }}
      />
    </div>
  )
}

const mapStateToProps: MapStateToProps<StateProps, Props, App.State> = state => ({
  currency: state.chart.currency,
  points: state.chart.points
})

const mapDispatchToProps: MapDispatchToProps<DispatchProps, Props> = dispatch => ({
  requestData: currency => dispatch(dataRequest(currency))
})

export default compose<Props, OuterProps>(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  withStyles(styles)
)(Graphic)
