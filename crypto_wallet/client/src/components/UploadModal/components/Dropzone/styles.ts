const styles = (theme: App.Theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 140,
    backgroundColor: theme.colors.uploadModal.dropzone.container.bg,
    border: `1px dashed ${theme.colors.uploadModal.dropzone.container.border}`
  },
  containerActive: {
    backgroundColor: theme.colors.uploadModal.dropzone.containerActiveBg
  },
  icon: {
    width: 24,
    height: 24,
    marginBottom: 10
  },
  title: {
    margin: 0,
    marginBottom: 5,
    font: '18px ProximaNovaBold',
    color: theme.colors.uploadModal.dropzone.titleColor
  },
  info: {
    margin: 0,
    fontSize: 12,
    color: theme.colors.uploadModal.dropzone.infoColor
  }
})

export default styles
