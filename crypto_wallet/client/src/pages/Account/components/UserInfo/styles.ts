const styles = (theme: App.Theme) => ({
  wrapper: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridTemplateRows: 'repeat(4, 1fr)',
    gridTemplateAreas: `
      ". title title"
      "avatar sub sub"
      "avatar sub sub"
      " . sub sub"`
  },
  title: {
    gridArea: 'title'
  },
  avatar: {
    gridArea: 'avatar',
    backgroundColor: '#efa'
  },
  list: {
    gridArea: 'sub'
  },
  item: {
    marginBottom: 20,
    listStyle: 'none'
  }
})

export default styles
