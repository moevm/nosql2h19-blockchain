import React, { FC, useCallback, useState, FormEventHandler } from 'react'
import { connect, MapDispatchToProps } from 'react-redux'

import compose from 'lib/utils/compose'
import { exportFile } from 'lib/modules/transactions/actions'
import Wrapper from './components/Wrapper'
import FileList from './components/FileList'
import Dropzone from './components/Dropzone'

interface OuterProps {
  className?: string
  active: boolean
  title: string
  onCloseClick: () => void
}

interface DispatchProps {
  sendFile: (file: FormData) => void
}

interface Props extends OuterProps, DispatchProps {}

const PortfolioUpload: FC<Props> = ({ className, sendFile, ...props }) => {
  const [document, setDocument] = useState<File[]>([])

  const dropzoneParams = {
    // accept: 'application/pdf',
    maxSize: 10 * 1024 * 1024 * 8,
    onDrop: useCallback(
      acceptedFiles => {
        setDocument(acceptedFiles)
      },
      [document]
    )
  }

  const onSubmitClick: FormEventHandler<HTMLFormElement> = e => {
    e.preventDefault()

    if (document.length) {
      const formData = new FormData()
      formData.append('file', document[0])

      sendFile(formData)
      props.onCloseClick()
      setDocument([])
    } else {
      alert('Форма заполнена неверно')
    }
  }

  return (
    <Wrapper className={className} onSubmitClick={onSubmitClick} {...props}>
      {!!document.length ? (
        <FileList files={document} onDeleteClick={() => setDocument([])} />
      ) : (
        <Dropzone params={dropzoneParams} />
      )}
    </Wrapper>
  )
}

const mapDispatchToProps: MapDispatchToProps<DispatchProps, Props> = dispatch => ({
  sendFile: file => dispatch(exportFile(file))
})

export default compose<Props, OuterProps>(
  connect(
    null,
    mapDispatchToProps
  )
)(PortfolioUpload)
