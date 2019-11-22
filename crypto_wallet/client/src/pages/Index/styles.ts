const styles = (theme: App.Theme) => ({
  wrapper: {
    display: 'grid',
    gridTemplateColumns: '70% 30%',
    width: '100%',
    // delete
    backgroundColor: '#000'
  },
  title: {
    textAlign: 'center'
  },
  statistics: {
    gridArea: 'statistics'
  }
})

export default styles
