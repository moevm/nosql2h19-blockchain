const styles = (theme: App.Theme) => ({
  button: {
    width: 100,
    height: 30,
    font: 'inherit',
    color: theme.colors.components.submitButton.color,
    backgroundColor: theme.colors.components.submitButton.background,
    border: '1px solid white',
    borderRadius: 5,
    cursor: 'pointer',
    transition: 'color 0.4s, text-decoration 0.4s',
    '&:hover': {
      color: theme.colors.components.submitButton.hover,
      textDecoration: 'underline'
    }
  }
})

export default styles
