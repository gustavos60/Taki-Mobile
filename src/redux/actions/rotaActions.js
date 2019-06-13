import { NEXT_ROTA, PREV_ROTA, ATUALIZA_ROTA } from "./actionTypes"

export const nextRota = () => {
  return {
    type: NEXT_ROTA,
  }
}

export const prevRota = () => {
  return {
    type: PREV_ROTA
  }
}

export const atualizaRota = (array) => {
  return {
    type: ATUALIZA_ROTA,
    aisleArray: array
  }
}