import React, { FC } from 'react'
import withStyles, { JSSProps } from 'react-jss'
import { Link } from 'react-router5'

import compose from 'lib/utils/compose'
import styles from './styles'

interface OuterProps {}

interface Props extends OuterProps, JSSProps<typeof styles> {}

const nameArr = ['Черкасова Елена', 'Костин Сергей', 'Серёдкин Дмитрий']

const Footer: FC<Props> = ({ classes }) => (
  <footer className={classes.container}>
    <p className={classes.text}>В разработке участвовали:</p>
    <ul className={classes.list}>
      {nameArr.map((item, index) => (
        <li key={index} className={classes.item}>
          {item}
        </li>
      ))}
    </ul>
  </footer>
)

export default compose<Props, OuterProps>(withStyles(styles))(Footer)
