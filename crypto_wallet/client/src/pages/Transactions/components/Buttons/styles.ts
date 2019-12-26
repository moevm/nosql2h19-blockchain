const styles = ({
  colors: {
    transactions: { buttons }
  }
}: App.Theme) => ({
  container: {
    padding: 20,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start'
  },
  button: {
    display: 'flex',
    alignItems: 'center',
    width: 100,
    height: 30,
    marginBottom: 10,
    padding: '0 20px',
    font: 'inherit',
    color: buttons.color,
    letterSpacing: 0.5,
    textTransform: 'uppercase',
    backgroundColor: buttons.bg,
    border: 'none',
    cursor: 'pointer',
    transition: 'color 0.3s, background-color 0.3s',
    '&:hover': {
      color: buttons.hover.color,
      backgroundColor: buttons.hover.bg
    }
  },
  link: {
    extend: 'button',
    textDecoration: 'none'
  }
})

export default styles
