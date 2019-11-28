import { createSelector } from 'reselect'

const stateSelector = (state: App.State) => state.user

export const tokenSelector = createSelector(
  stateSelector,
  state => state.token
)
