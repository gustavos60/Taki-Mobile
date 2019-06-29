import { TOGGLE_SELECTED, TOGGLE_CONFIRMATION, RESET_BOOLEANS } from "./actionTypes"

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

export const resetBooleans = () => {
  return {
    type: RESET_BOOLEANS
  }
}