import React, { FC, useEffect } from 'react'
import ReactEcharts from 'echarts-for-react'
import withStyles, { JSSProps } from 'react-jss'
import { connect, MapStateToProps, MapDispatchToProps } from 'react-redux'

import compose from 'lib/utils/compose'
import { dataRequest } from 'lib/modules/chart/actions'
import styles from './styles'

interface OuterProps {}

interface StateProps {
  chart: any
}

interface DispatchProps {
  requestData: () => void
}

interface Props extends OuterProps, StateProps, DispatchProps, JSSProps<typeof styles> {}

const Graphic: FC<Props> = ({ classes, chart, requestData }) => {
  useEffect(() => {
    requestData()
  }, [])
  console.log(chart)
  return (
    <div className={classes.wrapper}>
      <ReactEcharts
        option={{
          xAxis: {
            data: chart.x
          },
          yAxis: {
            type: 'value'
          },
          series: [
            {
              data: chart.y,
              type: 'line'
            }
          ]
        }}
      />
    </div>
  )
}

const mapStateToProps: MapStateToProps<StateProps, Props, App.State> = state => ({
  chart: state.chart
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
