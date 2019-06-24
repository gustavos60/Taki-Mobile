import { ADD_USER } from "./actionTypes"

export const addUser = (userInfo) => {
  return {
    type: ADD_USER,
    userInfo
  }
}