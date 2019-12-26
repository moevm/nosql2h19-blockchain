const styles = (theme: App.Theme) => ({
  wrapper: {
    position: 'fixed',
    display: 'flex',
    visibility: 'hidden',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    fontFamily: 'ProximaNovaRegular',
    color: theme.colors.uploadModal.color,
    zIndex: 101,
    transition: 'visibility 0s 0.4s'
  },
  wrapperBg: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: theme.colors.uploadModal.bg,
    opacity: 0,
    transition: '0.4s'
  },
  wrapperActive: {
    visibility: 'visible',
    transition: '0s',
    '& $wrapperBg': {
      opacity: 1
    },
    '& $modal': {
      opacity: 1,
      transform: 'none'
    }
  },
  modal: {
    position: 'relative',
    flex: 1,
    maxWidth: 570,
    margin: 'auto',
    padding: '50px 40px 30px',
    backgroundColor: theme.colors.uploadModal.wrapper.modal.bg,
    border: `1px solid ${theme.colors.uploadModal.wrapper.modal.border}`,
    opacity: 0,
    transform: 'translateY(50px)',
    transition: '0.4s'
  },
  title: {
    margin: 0,
    marginBottom: 20,
    font: '32px ProximaNovaBold'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  help: {
    margin: 0,
    marginTop: 15,
    fontSize: 14,
    color: theme.colors.uploadModal.wrapper.helpColor
  },
  submitButton: {
    height: 40,
    marginTop: 15
  },
  closeButton: {
    position: 'absolute',
    top: 18,
    right: 18
  }
})

export default styles
