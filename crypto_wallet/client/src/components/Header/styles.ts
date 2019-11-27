const styles = (theme: App.Theme) => ({
  container: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    height: 50,
    padding: '0 calc(50% - 640px)',
    backgroundColor: theme.colors.header.background,
    zIndex: 1
  },
  title: {
    margin: 0
  },
  logoAnchor: {
    marginRight: 'auto'
  },
  logoImage: {},
  anchor: {
    position: 'relative',
    display: 'block',
    width: 70,
    lineHeight: '30px',
    color: theme.colors.header.anchor.color,
    textAlign: 'center',
    textDecoration: 'none',
    backgroundColor: theme.colors.header.anchor.background
    // '&::before': {
    //   content: '""',
    //   position: 'absolute',
    //   top: 0,
    //   right: -20,
    //   bottom: 0,
    //   left: -20,
    //   backgroundColor: 'inherit',
    //   zIndex: -1,
    //   transform: 'skew(-25deg)'
    // }
  },
  accountAnchor: {
    extend: 'anchor'
  },
  anchorWrapper: {},
  signInAnchor: {
    extend: 'anchor'
  },
  signUpAnchor: {
    extend: 'anchor',
    marginLeft: 50
  }
})

export default styles
