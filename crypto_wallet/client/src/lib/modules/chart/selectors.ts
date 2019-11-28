import { createSelector } from 'reselect'

const stateSelector = (state: App.State) => state.chart

export const cacheSelector = createSelector(
  stateSelector,
  state => state.cache
)
