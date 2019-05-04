import { categoriaReducer } from './categoriaReducer'
import { itemReducer } from './itemReducer'
import { combineReducers } from 'redux'

export const Reducers = combineReducers({
  categoriaState: categoriaReducer,
  itemState: itemReducer
})