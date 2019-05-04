import { TOGGLE_SELECTED } from '../actions/actionTypes'

const initialState = {
  itens: [
    {
      nome: 'Pratos',
      id: 0,
      idImagem: 0,
      idCategoria: 2,
      selected: false
    },
    {
      nome: 'Copos',
      id: 1,
      idImagem: 5,
      idCategoria: 2,
      selected: false
    },
    {
      nome: 'Balões',
      id: 2,
      idImagem: 6,
      idCategoria: 2,
      selected: false
    },
    {
      nome: 'Decoração',
      id: 3,
      idImagem: 7,
      idCategoria: 2,
      selected: false
    },
    {
      nome: 'Grampos',
      id: 4,
      idImagem: 4,
      idCategoria: 1,
      selected: false
    },
    {
      nome: 'Post-it',
      id: 5,
      idImagem: 1,
      idCategoria: 1,
      selected: false
    },
    {
      nome: 'Pastas',
      id: 6,
      idImagem: 3,
      idCategoria: 1,
      selected: false
    },
    {
      nome: 'Papel',
      id: 7,
      idImagem: 2,
      idCategoria: 1,
      selected: false
    }
  ],
  totalSelected: 0
}

export const itemReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_SELECTED: {
      let id = action.itemId
      let sum = (state.itens[id].selected) ? -1 : 1
      let itensArray = state.itens.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            selected: !item.selected
          }
        } else return item
      })
      return {
        itens: itensArray,
        totalSelected: state.totalSelected + sum
      }
    }
    default:
      return state
  }
}