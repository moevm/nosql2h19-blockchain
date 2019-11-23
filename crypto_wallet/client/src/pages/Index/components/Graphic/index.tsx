import React, { FC, useEffect } from 'react'
import ReactEcharts from 'echarts-for-react'
import withStyles, { JSSProps } from 'react-jss'
import { connect, MapStateToProps, MapDispatchToProps } from 'react-redux'

import compose from 'lib/utils/compose'
import { dataRequest } from 'lib/modules/chart/actions'
import styles from './styles'

interface OuterProps {}

interface StateProps {
  currency: string
  xCoord: string[]
  yCoord: string[]
}

interface DispatchProps {
  requestData: () => void
}

interface Props extends OuterProps, StateProps, DispatchProps, JSSProps<typeof styles> {}

const Graphic: FC<Props> = ({ classes, currency, xCoord, yCoord, requestData }) => {
  useEffect(() => {
    requestData()
  }, [currency])

  return (
    <div className={classes.wrapper}>
      <ReactEcharts
        option={{
          xAxis: {
            data: xCoord
          },
          yAxis: {
            type: 'value'
          },
          series: [
            {
              data: yCoord,
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
  xCoord: state.chart.x,
  yCoord: state.chart.y
})

const mapDispatchToProps: MapDispatchToProps<DispatchProps, Props> = dispatch => ({
  requestData: () => dispatch(dataRequest())
})

export default compose<Props, OuterProps>(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  withStyles(styles)
)(Graphic)
