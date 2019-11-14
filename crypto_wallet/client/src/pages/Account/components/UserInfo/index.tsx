import React, { FC } from 'react'
import cn from 'classnames'
import withStyles, { JSSProps } from 'react-jss'

import compose from 'lib/utils/compose'
import styles from './styles'

interface OuterProps {
  className?: string
}

interface Props extends OuterProps, JSSProps<typeof styles> {}

const UserInfo: FC<Props> = ({ classes, className }) => {
  return (
    <article className={cn(classes.wrapper, className)}>
      <h2 className={classes.title}>User information</h2>
      <img className={classes.avatar} src="" alt="user avatar" />
      <ul className={classes.list}>
        <li className={classes.item}>E-mail:</li>
        <li className={classes.item}>Login:</li>
        <li className={classes.item}>Info:</li>
      </ul>
    </article>
  )
}

export default compose<Props, OuterProps>(withStyles(styles))(UserInfo)
