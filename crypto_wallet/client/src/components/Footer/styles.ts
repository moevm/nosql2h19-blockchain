const styles = (theme: App.Theme) => ({
  container: {
    padding: '20px calc(50% - 640px)',
    fontFamily: 'Shell',
    textAlign: 'right',
    color: theme.colors.footer.color,
    backgroundColor: theme.colors.footer.background,
    boxShadow: 'inset 0 1px 0 #aaa',
    [theme.breakpoints.down('xl')]: {
      padding: '20px 50px'
    }
  },
  text: {
    margin: 0
  },
  list: {
    margin: 0,
    padding: 0
  },
  item: {
    listStyle: 'none'
  }
})

export default styles
