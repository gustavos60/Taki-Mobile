import { TOGGLE_SELECTED } from "./actionTypes"

export const toggleSelected = (itemIndex) => {
  return {
    type: TOGGLE_SELECTED,
    itemId: itemIndex
  }
}