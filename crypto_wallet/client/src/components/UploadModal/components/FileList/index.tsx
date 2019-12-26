import React, { FC, Fragment } from 'react'
import cn from 'classnames'
import withStyles, { JSSProps } from 'react-jss'

import compose from 'lib/utils/compose'
import styles from './styles'

interface OuterProps {
  className?: string
  files: File[]
  onDeleteClick: () => void
}

interface Props extends OuterProps, JSSProps<typeof styles> {}

const FileList: FC<Props> = ({ classes, className, files, onDeleteClick }) => (
  <div className={cn(classes.container, className)}>
    <p className={classes.text}>Загруженные файлы:</p>
    <ul className={cn(classes.list, className)}>
      {files.map((file, index) => (
        <li key={index} className={classes.item}>
          <button
            type="button"
            aria-label="кнопка для удаления загруженного файла"
            onClick={onDeleteClick}
          >
            x
          </button>
          <span className={classes.fileName}>{file.name}</span>
        </li>
      ))}
    </ul>
  </div>
)

export default compose<Props, OuterProps>(withStyles(styles))(FileList)
