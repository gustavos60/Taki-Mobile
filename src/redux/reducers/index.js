import { categoriaReducer } from './categoriaReducer'
import { itemReducer } from './itemReducer'
import { combineReducers } from 'redux'
import { rotaReducer } from './rotaReducer'
import { userReducer } from './userReducer'

export const Reducers = combineReducers({
  categoriaState: categoriaReducer,
  itemState: itemReducer,
  rotaState: rotaReducer,
  userState: userReducer
})