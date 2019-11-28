const styles = (theme: App.Theme) => ({
  container: {
    display: 'grid',
    gridTemplateAreas: `
      "text text"
      "input select"
    `,
    gridTemplateColumns: '70% 30%',
    width: '100%'
  },
  text: {
    margin: 0,
    marginBottom: 10,
    textTransform: 'uppercase'
  },
  input: {
    gridArea: 'input',
    height: 60,
    paddingLeft: 35,
    fontSize: '1.5rem',
    border: `1px solid ${theme.colors.account.exchange.input.border}`,
    borderRadius: '4px 0 0 4px'
  },
  select: {
    display: 'none',
    gridArea: 'select',
    height: 60,
    borderRadius: '0 4px 4px 0'
  }
})

export default styles
