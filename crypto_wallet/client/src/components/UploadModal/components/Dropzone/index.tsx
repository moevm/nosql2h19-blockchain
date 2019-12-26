import React, { FC } from 'react'
import cn from 'classnames'
import { useDropzone, DropzoneOptions } from 'react-dropzone'
import withStyles, { JSSProps } from 'react-jss'

import compose from 'lib/utils/compose'
import styles from './styles'

interface OuterProps {
  className?: string
  params: DropzoneOptions
}

interface Props extends OuterProps, JSSProps<typeof styles> {}

const Dropzone: FC<Props> = ({ classes, className, params }) => {
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ ...params })

  return (
    <div
      className={cn(classes.container, isDragActive && classes.containerActive, className)}
      {...getRootProps()}
    >
      <input {...getInputProps()} />
      <p className={classes.title}>Загрузите файл</p>
      <p className={classes.info}>Выберите файл на копьютере или перенесите его в это окно</p>
    </div>
  )
}

export default compose<Props, OuterProps>(withStyles(styles))(Dropzone)
