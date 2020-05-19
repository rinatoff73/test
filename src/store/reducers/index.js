import { combineReducers } from 'redux'
import cards from './cards'
import filterCards from './filterCards'

export const rootReducer = combineReducers({
  cards,
  filterCards
})