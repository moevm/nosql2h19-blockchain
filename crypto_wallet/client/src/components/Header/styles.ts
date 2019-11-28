const styles = (theme: App.Theme) => ({
  container: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    height: 50,
    padding: '0 calc(50% - 640px)',
    backgroundColor: theme.colors.header.background,
    boxShadow: 'inset 0 -1px 0 #ccc',
    zIndex: 1,
    [theme.breakpoints.down('xl')]: {
      padding: '0 50px'
    }
  },
  title: {
    margin: 0
  },
  logoAnchor: {
    marginRight: 'auto'
  },
  logoImage: {
    width: 100,
    height: 50
  },
  anchor: {
    position: 'relative',
    display: 'block',
    padding: '0 20px',
    lineHeight: '30px',
    color: theme.colors.header.anchor.color,
    textAlign: 'center',
    textDecoration: 'none',
    backgroundColor: theme.colors.header.anchor.background,
    transition: 'color 0.3s, background-color 0.3s',
    '&:hover': {
      color: theme.colors.header.anchor.hover.color,
      backgroundColor: theme.colors.header.anchor.hover.bg
    }
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
    extend: 'anchor',
    backgroundColor: 'transparent'
  },
  anchorWrapper: {
    display: 'flex'
  },
  signInAnchor: {
    extend: 'anchor'
  },
  signUpAnchor: {
    extend: 'anchor',
    marginLeft: 15
  }
})

export default styles
