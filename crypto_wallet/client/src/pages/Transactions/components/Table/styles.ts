const styles = (theme: App.Theme) => ({
  table: {
    borderCollapse: 'collapse',
    width: '100%',
    backgroundColor: theme.colors.transactions.table.bg,
    '& thead': {
      fontFamily: 'ProximaNovaBold',
      textTransform: 'uppercase'
    },
    '& th, & td': {
      height: 40,
      padding: 0,
      border: `2px solid ${theme.colors.transactions.table.border}`
    }
  },
  count: {
    width: 150
  },
  currency: {
    extend: 'count'
  }
})

export default styles
