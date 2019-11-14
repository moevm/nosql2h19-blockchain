const styles = (theme: App.Theme) => ({
  form: {
    alignItems: 'flex-start',
    padding: '40px 100px',
    backgroundColor: theme.colors.account.exchange.form.background,
    borderRadius: 0,
    boxShadow: 'none'
  },
  header: {
    margin: 0,
    marginBottom: 5,
    fontSize: '2rem'
  },
  info: {
    margin: 0,
    marginBottom: 35
  },
  input: {
    marginBottom: 30
  },
  button: {
    width: '70%',
    height: 60,
    fontSize: '1.5rem',
    textTransform: 'uppercase',
    color: theme.colors.account.exchange.button.color,
    backgroundColor: theme.colors.account.exchange.button.background,
    borderRadius: 4
  }
})

export default styles
