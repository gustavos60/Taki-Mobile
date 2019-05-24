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
    },
    {
      nome: 'Promocionais',
      id: 8,
      idImagem: 2,
      idCategoria: 1,
      selected: false
    },
    {
      nome: 'Descartáveis',
      id: 9,
      idImagem: 2,
      idCategoria: 1,
      selected: false
    },
    {
      nome: 'Festa',
      id: 10,
      idImagem: 2,
      idCategoria: 1,
      selected: false
    },
    {
      nome: 'Chocolate',
      id: 11,
      idImagem: 2,
      idCategoria: 1,
      selected: false
    },
    {
      nome: 'Biscoito',
      id: 12,
      idImagem: 2,
      idCategoria: 1,
      selected: false
    },
    {
      nome: 'Bebidas',
      id: 13,
      idImagem: 2,
      idCategoria: 1,
      selected: false
    },
    {
      nome: 'Ovos',
      id: 14,
      idImagem: 2,
      idCategoria: 1,
      selected: false
    },
    {
      nome: 'Hortifruti',
      id: 15,
      idImagem: 2,
      idCategoria: 1,
      selected: false
    },
    {
      nome: 'Padaria',
      id: 16,
      idImagem: 2,
      idCategoria: 1,
      selected: false
    },
    {
      nome: 'Leite',
      id: 17,
      idImagem: 2,
      idCategoria: 1,
      selected: false
    },
    {
      nome: 'Achocolatado',
      id: 18,
      idImagem: 2,
      idCategoria: 1,
      selected: false
    },
    {
      nome: 'Frutas',
      id: 19,
      idImagem: 2,
      idCategoria: 1,
      selected: false
    },
    {
      nome: 'Oleo',
      id: 20,
      idImagem: 2,
      idCategoria: 1,
      selected: false
    },
    {
      nome: 'Azeite',
      id: 21,
      idImagem: 2,
      idCategoria: 1,
      selected: false
    },
    {
      nome: 'Enlatados',
      id: 22,
      idImagem: 2,
      idCategoria: 1,
      selected: false
    },
    {
      nome: 'Massas',
      id: 23,
      idImagem: 2,
      idCategoria: 1,
      selected: false
    },
    {
      nome: 'Condimentos',
      id: 24,
      idImagem: 2,
      idCategoria: 1,
      selected: false
    },
    {
      nome: 'Higiene',
      id: 25,
      idImagem: 2,
      idCategoria: 1,
      selected: false
    },
    {
      nome: 'Fraldas',
      id: 26,
      idImagem: 2,
      idCategoria: 1,
      selected: false
    },
    {
      nome: 'Perfumaria',
      id: 27,
      idImagem: 2,
      idCategoria: 1,
      selected: false
    },
    {
      nome: 'Verduras',
      id: 28,
      idImagem: 2,
      idCategoria: 1,
      selected: false
    },
    {
      nome: 'Limpeza',
      id: 29,
      idImagem: 2,
      idCategoria: 1,
      selected: false
    },
    {
      nome: 'Bazar',
      id: 30,
      idImagem: 2,
      idCategoria: 1,
      selected: false
    },
    {
      nome: 'Pets',
      id: 31,
      idImagem: 2,
      idCategoria: 1,
      selected: false
    },
    {
      nome: 'Grãos',
      id: 32,
      idImagem: 2,
      idCategoria: 1,
      selected: false
    },
    {
      nome: 'Frango',
      id: 33,
      idImagem: 2,
      idCategoria: 1,
      selected: false
    },
    {
      nome: 'Carne',
      id: 34,
      idImagem: 2,
      idCategoria: 1,
      selected: false
    },
    {
      nome: 'Peixe',
      id: 35,
      idImagem: 2,
      idCategoria: 1,
      selected: false
    },
    {
      nome: 'Congelado',
      id: 36,
      idImagem: 2,
      idCategoria: 1,
      selected: false
    },
    {
      nome: 'Sorvete',
      id: 37,
      idImagem: 2,
      idCategoria: 1,
      selected: false
    },
    {
      nome: 'Laticinios',
      id: 38,
      idImagem: 2,
      idCategoria: 1,
      selected: false
    },
    {
      nome: 'Frios',
      id: 39,
      idImagem: 2,
      idCategoria: 1,
      selected: false
    },
    {
      nome: 'Frigorífico',
      id: 40,
      idImagem: 2,
      idCategoria: 1,
      selected: false
    },
    {
      nome: 'Embutidos',
      id: 41,
      idImagem: 2,
      idCategoria: 1,
      selected: false
    },
    {
      nome: 'Escova de Dente',
      id: 42,
      idImagem: 2,
      idCategoria: 1,
      selected: false
    },
    {
      nome: 'Sabonete',
      id: 43,
      idImagem: 2,
      idCategoria: 1,
      selected: false
    },
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