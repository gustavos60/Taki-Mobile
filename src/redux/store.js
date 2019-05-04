import { createStore } from 'redux'
import { Reducers } from './reducers/index'

export const store = createStore(Reducers)