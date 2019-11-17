import React, { FC } from 'react'
import cn from 'classnames'
import withStyles, { JSSProps } from 'react-jss'
import { connect, MapStateToProps } from 'react-redux'

import compose from 'lib/utils/compose'
import styles from './styles'

interface OuterProps {
  className?: string
}

interface StateProps {
  user: Data.User
}

interface Props extends OuterProps, StateProps, JSSProps<typeof styles> {}

const parseDate = (date: Date) => {
  return `${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`
}

const UserInfo: FC<Props> = ({ classes, className, user }) => {
  return (
    <article className={cn(classes.wrapper, className)}>
      <h2 className={classes.title}>{user.username}</h2>
      <p className={classes.date}>{parseDate(user.regDate)}</p>
    </article>
  )
}

const mapStateToProps: MapStateToProps<StateProps, Props, App.State> = state => ({
  user: state.user
})

export default compose<Props, OuterProps>(
  connect(mapStateToProps),
  withStyles(styles)
)(UserInfo)
