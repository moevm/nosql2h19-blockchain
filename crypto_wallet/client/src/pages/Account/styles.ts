const styles = (theme: App.Theme) => ({
  wrapper: {
    display: 'grid',
    gridTemplateRows: '40px 1fr',
    gridTemplateColumns: '3fr 2fr',
    gridTemplateAreas: `
      'user user'
      'exchange money'
    `,
    gridGap: '40px',
    width: '100%',
    padding: '40px 0'
  },
  userInfo: {
    gridArea: 'user'
  }
})

export default styles
