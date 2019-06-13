import {PREV_ROTA, NEXT_ROTA, ATUALIZA_ROTA} from '../actions/actionTypes'

const initialState = {
    rotaArray: [],
    indAtual: 0
}

export const rotaReducer = (state=initialState, action) => {
    let indAtual = state.indAtual
    let sizeRota = state.rotaArray
    let prevInd
    let nextInd

    switch (action.type) {
        case PREV_ROTA: {
            if (indAtual - 1 > 0) {
                prevInd = indAtual - 1
            }
            else {
                prevInd = indAtual
            }
            return {
                rotaArray: state.rotaArray,
                indAtual: prevInd
            }
        }
        
        case NEXT_ROTA:{
            if (indAtual+1 < sizeRota) {
                nextInd = indAtual + 1
            }
            else {
                nextInd = indAtual
            }
            return {
                rotaArray: state.rotaArray,
                indAtual: nextInd
            }
        }

        case ATUALIZA_ROTA: {
            return {
                rotaArray: action.aisleArray,
                indAtual: indAtual
            }
        }

        default:
            return state
    }
}