import { ComponentType } from 'react'

export default function compose<TInner, TOutter>(
  ...functions: Function[]
): (component: ComponentType<TOutter>) => ComponentType<TOutter> {
  // @ts-ignore
  return functions.reduce((a, b) => (...args) => a(b(...args)), arg => arg) as (
    component: ComponentType<TOutter>
  ) => ComponentType<TOutter>
}
