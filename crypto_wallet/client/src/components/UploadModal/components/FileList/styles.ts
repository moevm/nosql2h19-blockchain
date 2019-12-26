const styles = (theme: App.Theme) => ({
  container: {
    width: '100%'
  },
  text: {
    margin: 0,
    marginBottom: 10,
    fontSize: 15,
    color: theme.colors.uploadModal.fileList.textColor
  },
  list: {
    margin: 0,
    padding: 0
  },
  item: {
    display: 'flex',
    alignItems: 'center',
    userSelect: 'none',
    '&:not(:last-child)': {
      marginBottom: 10
    }
  },
  fileName: {
    marginLeft: 5,
    fontSize: 18
  }
})

export default styles
