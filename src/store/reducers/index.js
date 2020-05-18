import { combineReducers } from 'redux'
import card from './card'
import filterCard from './filterCard'

export const rootReducer = combineReducers({
  card,
  filterCard
})