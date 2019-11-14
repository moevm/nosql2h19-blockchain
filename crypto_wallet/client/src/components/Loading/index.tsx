import React, { FunctionComponent } from 'react'
import withStyles, { JSSProps } from 'react-jss'

import compose from 'utils/compose'
import styles from './styles'

export interface LoadingProps {
  loaderOptions?: {
    color?: string
    background?: string
    duration?: number
    size?: string
    margin?: string
  }
}

interface Props extends LoadingProps, JSSProps<typeof styles> {}

const Loading: FunctionComponent<Props> = ({ classes }) => {
  return <div className={classes.spinner} />
}

export default compose<Props, LoadingProps>(withStyles(styles))(Loading)
