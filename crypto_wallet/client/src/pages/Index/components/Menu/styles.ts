const styles = (theme: App.Theme) => ({
  wrapper: {},
  list: {
    margin: 0,
    padding: 0
  },
  item: {
    border: `1px solid ${theme.colors.index.menu.item.border}`,
    borderRightWidht: 2,
    borderLeftWidth: 2,
    listStyle: 'none',
    '&:first-child': {
      borderTopWidth: 2
    },
    '&:last-child': {
      borderBottomWidth: 2
    }
  },
  button: {
    width: '100%',
    height: 60,
    padding: 0,
    color: `${theme.colors.index.menu.button.color}`,
    backgroundColor: `${theme.colors.index.menu.button.background}`,
    border: `1px solid transparent`,
    outline: 'none',
    cursor: 'pointer',
    transitionProperty: 'color, background-color, border',
    transitionDuration: '0.4s',
    '&:hover': {
      color: `${theme.colors.index.menu.button.hover.color}`,
      backgroundColor: `${theme.colors.index.menu.button.hover.background}`
    }
  }
})

export default styles
