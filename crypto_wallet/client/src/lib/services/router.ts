import createRouter, { Router, State, Dependencies, NavigationOptions } from 'router5'

import { routes } from 'constants/routes'

// class RouterManager {
//   protected static instance: Router

//   constructor() {
//     if (RouterManager.instance) {
//       throw new Error(`Instance of router is already exist. Use 'getInstance' method`)
//     }

//     RouterManager.instance = createRouter(routes, { allowNotFound: true })
//   }

//   public getInstance(): Router {
//     return RouterManager.instance
//   }

//   public getMSTPluginFactory(routerStore: App.Store['router5'], options = {}) {
//     function mstPlugin(router: Router, dependencies: Dependencies) {
//       // NOTE: cross-referencing objects
//       router.setDependency('routerStore', routerStore)
//       routerStore.setRouter(router)

//       // Implemented methods
//       return {
//         onTransitionStart(toState: State, fromState: State) {
//           routerStore.onTransitionStart(toState, fromState)
//         },
//         onTransitionSuccess(toState: State, fromState: State, opts: NavigationOptions) {
//           routerStore.onTransitionSuccess(toState, fromState, opts)
//         },
//         onTransitionCancel(toState: State, fromState: State) {
//           routerStore.onTransitionCancel(toState, fromState)
//         },
//         onTransitionError(toState: State, fromState: State, err: string) {
//           routerStore.onTransitionError(toState, fromState, err)
//         }
//       }
//     }

//     mstPlugin.pluginName = 'MST_PLUGIN'

//     return mstPlugin
//   }
// }

// export default new RouterManager()

export default function configureRouter() {
  const router = createRouter(routes, {
    defaultRoute: 'index'
  })
  // // Plugins
  // .usePlugin(
  //     browserPlugin({
  //         useHash: true
  //     })
  // )

  return router
}
