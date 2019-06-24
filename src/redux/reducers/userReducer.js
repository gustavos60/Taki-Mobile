import { ADD_USER } from '../actions/actionTypes'

const initialState = {
  userInfo: undefined
}

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER: {
      return {
        ...action.userInfo
      }
    }
    default:
      return state
  }
}