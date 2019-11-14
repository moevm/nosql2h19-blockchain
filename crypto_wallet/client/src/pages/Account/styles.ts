const styles = (theme: App.Theme) => ({
  wrapper: {
    display: 'grid',
    gridTemplateColumns: '70% 30%',
    gridTemplateRows: '35% 65%',
    gridTemplateAreas: `
      "user money"
      "operations money"
    `,
    width: '100%',
    backgroundColor: theme.colors.account.background
  },
  title: {
    textAlign: 'center'
  },
  container: {},
  moneyInfo: {
    gridArea: 'money'
  }
})

export default styles
