import {PREV_ROTA, NEXT_ROTA, ATUALIZA_ROTA} from '../actions/actionTypes'

const initialState = {
    rotaArray: [],
    indAtual: 0
}

export const rotaReducer = (state=initialState, action) => {
    switch (action.type) {
        case PREV_ROTA:
            let indAtual = state.indAtual
            let sizeRota = state.rotaArray.length
            let prevInd

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
        
        case NEXT_ROTA:
            let indAtual = state.indAtual
            let sizeRota = state.rotaArray.length
            let nextInd

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

        case ATUALIZA_ROTA:
            return {
                rotaArray: action.rotas,
                indAtual: 0
            }

        default: return state
    }
}