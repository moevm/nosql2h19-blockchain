import bgImage from 'assets/images/background.svg'

const styles: App.Styles<{}> = theme => ({
  '@global': {
    '*': {
      boxSizing: 'border-box'
    },
    html: {
      fontFamily: 'Roboto',
      fontSize: 16,
      fontStyle: 'normal',
      width: '100%',
      height: '100%'
    },
    body: {
      width: '100%',
      height: '100%',
      margin: 0
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
    backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.6)), url("${bgImage}")`,
    backgroundSize: 'cover'
  }
})

export { styles as default }
