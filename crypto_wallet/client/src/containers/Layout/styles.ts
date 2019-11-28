import bgImage from 'assets/images/background.svg'
import Shell from 'assets/fonts/Shell.ttf'
import PNRegular from 'assets/fonts/ProximaNovaRegular.ttf'
import PNBold from 'assets/fonts/ProximaNovaBold.ttf'

const styles = (theme: App.Theme) => ({
  '@global': {
    '@font-face': [
      {
        fontFamily: 'Shell',
        src: `url("${Shell}") format('truetype')`
      },
      {
        fontFamily: 'ProximaNovaRegular',
        src: `url("${PNRegular}") format('truetype')`
      },
      {
        fontFamily: 'ProximaNovaBold',
        src: `url("${PNBold}") format('truetype')`
      }
    ],
    '*': {
      boxSizing: 'border-box'
    },
    html: {
      fontFamily: 'ProximaNovaRegular',
      fontSize: 16,
      fontStyle: 'normal',
      width: '100%',
      height: '100%'
    },
    body: {
      width: '100%',
      height: '100%',
      margin: 0,
      backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.6)), url("${bgImage}")`,
      backgroundSize: 'cover'
    },
    '#root': {
      display: 'flex',
      flexFlow: 'column nowrap',
      minWidth: 320,
      width: '100%',
      minHeight: '100%',
      margin: 'auto'
    }
  },
  layout: {
    display: 'flex',
    flex: '1 0 auto',
    width: '100%',
    height: '100%',
    padding: '0 calc(50% - 640px)',
    [theme.breakpoints.down('xl')]: {
      padding: '0 50px'
    }
  }
})

export { styles as default }
