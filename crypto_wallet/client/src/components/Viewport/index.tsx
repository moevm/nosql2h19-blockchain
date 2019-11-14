import React, { PureComponent, HTMLAttributes } from 'react'
// import { inject, observer } from 'mobx-react'
// import withStyles, { JSSProps } from 'react-jss'

// import compose from 'utils/compose'
// import styles from './styles'

// interface OuterProps extends HTMLAttributes<HTMLDivElement> {}
// interface StateProps {
//   viewportWidth: App.Store['app']['viewport']['width']
//   viewportHeight: App.Store['app']['viewport']['height']
// }
// interface ActionsProps {
//   changeSize: App.Store['app']['viewport']['changeSize']
// }
// interface Props extends OuterProps, StateProps, ActionsProps, JSSProps<typeof styles> {}
// interface State {}

// class Viewport extends PureComponent<Props, State> {
//   element: HTMLDivElement

//   componentDidMount() {
//     window.addEventListener('resize', this.resize)
//   }

//   componentWillUnmount() {
//     window.removeEventListener('resize', this.resize)
//   }

//   bind = (element: HTMLDivElement) => {
//     if (!this.element) {
//       this.element = element

//       this.resize()
//     }
//   }

//   resize = () => {
//     const { viewportWidth, viewportHeight, changeSize } = this.props

//     if (this.element) {
//       const { offsetWidth, offsetHeight } = this.element

//       if (viewportWidth !== offsetWidth || viewportHeight !== offsetHeight) {
//         changeSize({ width: offsetWidth, height: offsetHeight })
//       }
//     }
//   }

//   render() {
//     return <div ref={this.bind} className={this.props.classes.container} />
//   }
// }
// export default compose<Props, OuterProps>(
//   inject<App.Stores, Props, StateProps, {}>(({ store }) => ({
//     viewportWidth: store.app.viewport.width,
//     viewportHeight: store.app.viewport.height,
//     changeSize: store.app.viewport.changeSize
//   })),
//   observer,
//   withStyles(styles)
// )(Viewport)
