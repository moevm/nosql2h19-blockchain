import React, { FC } from 'react'
import cn from 'classnames'
import ReactEcharts from 'echarts-for-react'
import withStyles, { JSSProps } from 'react-jss'
import { connect, MapStateToProps } from 'react-redux'

import compose from 'lib/utils/compose'
import styles from './styles'

interface OuterProps {
  className?: string
}

interface StateProps {
  points: Data.Transactions['chart']
}

interface Props extends OuterProps, StateProps, JSSProps<typeof styles> {}

const Chart: FC<Props> = ({ classes, className, points }) => {
  return (
    <section className={cn(classes.container, className)}>
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
              type: 'bar'
            }
          ],
          color: '#212121'
        }}
      />
    </section>
  )
}

const mapStateToProps: MapStateToProps<StateProps, Props, App.State> = state => ({
  points: state.transactions.chart
})

export default compose<Props, OuterProps>(
  connect(mapStateToProps),
  withStyles(styles)
)(Chart)
