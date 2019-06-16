import { TOGGLE_SELECTED, TOGGLE_CONFIRMATION } from "./actionTypes"

export const toggleSelected = (itemIndex) => {
  return {
    type: TOGGLE_SELECTED,
    itemId: itemIndex
  }
}

export const toggleConfirmation = (itemIndex) => {
  return {
    type: TOGGLE_CONFIRMATION,
    itemId: itemIndex
  }
}