import React, { FC, useState } from 'react'
import cn from 'classnames'
import withStyles, { JSSProps } from 'react-jss'

import compose from 'lib/utils/compose'
import UploadModal from 'components/UploadModal'
import styles from './styles'

interface OuterProps {
  className?: string
}

interface Props extends OuterProps, JSSProps<typeof styles> {}

const Buttons: FC<Props> = ({ classes, className }) => {
  const [modal, setModal] = useState<boolean>(false)

  return (
    <div className={cn(classes.container, className)}>
      <button
        className={classes.button}
        type="button"
        aria-label="button for import"
        onClick={() => setModal(true)}
      >
        Import
      </button>
      <a
        className={classes.link}
        href="/api/v0/transactions/export_db"
        target="blank"
        rel="norefferer nofollow"
        aria-label="link for export"
      >
        Export
      </a>

      <UploadModal
        title="Загрузите файл для экспорта"
        active={modal}
        onCloseClick={() => setModal(false)}
      />
    </div>
  )
}

export default compose<Props, OuterProps>(withStyles(styles))(Buttons)
