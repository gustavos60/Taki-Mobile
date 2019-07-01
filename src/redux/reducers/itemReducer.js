import { TOGGLE_SELECTED, TOGGLE_CONFIRMATION, RESET_BOOLEANS, ATUALIZA_ITENS } from '../actions/actionTypes'

const initialState = {
  // itens: [
  //   {
  //     nome: 'Descartáveis',
  //     id: 9,
  //     idImagem: 2,
  //     idCategoria: 1,
  //     selected: false,
  //     confirmed: false
  //   },
  //   {
  //     nome: 'Biscoito',
  //     id: 12,
  //     idImagem: 2,
  //     idCategoria: 1,
  //     selected: false,
  //     confirmed: false
  //   },
  //   {
  //     nome: 'Bebidas',
  //     id: 13,
  //     idImagem: 2,
  //     idCategoria: 1,
  //     selected: false,
  //     confirmed: false
  //   },
  //   {
  //     nome: 'Ovos',
  //     id: 14,
  //     idImagem: 2,
  //     idCategoria: 2,
  //     selected: false,
  //     confirmed: false
  //   },
  //   {
  //     nome: 'Hortifruti',
  //     id: 15,
  //     idImagem: 2,
  //     idCategoria: 5,
  //     selected: false,
  //     confirmed: false
  //   },
  //   {
  //     nome: 'Padaria',
  //     id: 16,
  //     idImagem: 2,
  //     idCategoria: 1,
  //     selected: false,
  //     confirmed: false
  //   },
  //   {
  //     nome: 'Leite e Achocolatado',
  //     id: 17,
  //     idImagem: 2,
  //     idCategoria: 6,
  //     selected: false,
  //     confirmed: false
  //   },
  //   {
  //     nome: 'Doces e Bolos',
  //     id: 18,
  //     idImagem: 2,
  //     idCategoria: 1,
  //     selected: false,
  //     confirmed: false
  //   },
  //   {
  //     nome: 'Frutas',
  //     id: 19,
  //     idImagem: 2,
  //     idCategoria: 5,
  //     selected: false,
  //     confirmed: false
  //   },
  //   {
  //     nome: 'Enlatados',
  //     id: 22,
  //     idImagem: 2,
  //     idCategoria: 1,
  //     selected: false,
  //     confirmed: false
  //   },
  //   {
  //     nome: 'Massas',
  //     id: 23,
  //     idImagem: 2,
  //     idCategoria: 1,
  //     selected: false,
  //     confirmed: false
  //   },
  //   {
  //     nome: 'Condimentos',
  //     id: 24,
  //     idImagem: 2,
  //     idCategoria: 1,
  //     selected: false,
  //     confirmed: false
  //   },
  //   {
  //     nome: 'Fraldas',
  //     id: 26,
  //     idImagem: 2,
  //     idCategoria: 4,
  //     selected: false,
  //     confirmed: false
  //   },
  //   {
  //     nome: 'Perfumaria',
  //     id: 27,
  //     idImagem: 2,
  //     idCategoria: 1,
  //     selected: false,
  //     confirmed: false
  //   },
  //   {
  //     nome: 'Verduras',
  //     id: 28,
  //     idImagem: 2,
  //     idCategoria: 5,
  //     selected: false,
  //     confirmed: false
  //   },
  //   {
  //     nome: 'Limpeza',
  //     id: 29,
  //     idImagem: 2,
  //     idCategoria: 3,
  //     selected: false,
  //     confirmed: false
  //   },
  //   {
  //     nome: 'Pets',
  //     id: 31,
  //     idImagem: 2,
  //     idCategoria: 1,
  //     selected: false,
  //     confirmed: false
  //   },
  //   {
  //     nome: 'Grãos',
  //     id: 32,
  //     idImagem: 2,
  //     idCategoria: 1,
  //     selected: false,
  //     confirmed: false
  //   },
  //   {
  //     nome: 'Frango',
  //     id: 33,
  //     idImagem: 2,
  //     idCategoria: 2,
  //     selected: false,
  //     confirmed: false
  //   },
  //   {
  //     nome: 'Carne',
  //     id: 34,
  //     idImagem: 2,
  //     idCategoria: 2,
  //     selected: false,
  //     confirmed: false
  //   },
  //   {
  //     nome: 'Peixe',
  //     id: 35,
  //     idImagem: 2,
  //     idCategoria: 2,
  //     selected: false,
  //     confirmed: false
  //   },
  //   {
  //     nome: 'Congelado',
  //     id: 36,
  //     idImagem: 2,
  //     idCategoria: 1,
  //     selected: false,
  //     confirmed: false
  //   },
  //   {
  //     nome: 'Sorvete',
  //     id: 37,
  //     idImagem: 2,
  //     idCategoria: 1,
  //     selected: false,
  //     confirmed: false
  //   },
  //   {
  //     nome: 'Laticinios',
  //     id: 38,
  //     idImagem: 2,
  //     idCategoria: 6,
  //     selected: false,
  //     confirmed: false
  //   },
  //   {
  //     nome: 'Frios',
  //     id: 39,
  //     idImagem: 2,
  //     idCategoria: 1,
  //     selected: false,
  //     confirmed: false
  //   },
  //   {
  //     nome: 'Frigorífico',
  //     id: 40,
  //     idImagem: 2,
  //     idCategoria: 2,
  //     selected: false,
  //     confirmed: false
  //   },
  //   {
  //     nome: 'Sabonete',
  //     id: 43,
  //     idImagem: 2,
  //     idCategoria: 4,
  //     selected: false,
  //     confirmed: false
  //   },
  //   {
  //     nome: 'Ofertas',
  //     id: 44,
  //     idImagem: 2,
  //     idCategoria: 1,
  //     selected: false,
  //     confirmed: false
  //   },
  //   {
  //     nome: 'Aveia',
  //     id: 45,
  //     idImagem: 2,
  //     idCategoria: 1,
  //     selected: false,
  //     confirmed: false
  //   },
  //   {
  //     nome: 'Bolacha',
  //     id: 46,
  //     idImagem: 2,
  //     idCategoria: 1,
  //     selected: false,
  //     confirmed: false
  //   },
  //   {
  //     nome: 'Cozinha',
  //     id: 47,
  //     idImagem: 2,
  //     idCategoria: 1,
  //     selected: false,
  //     confirmed: false
  //   },
  //   {
  //     nome: 'Sandalia',
  //     id: 48,
  //     idImagem: 2,
  //     idCategoria: 1,
  //     selected: false,
  //     confirmed: false
  //   },
  //   {
  //     nome: 'Cuscuz e Milho',
  //     id: 49,
  //     idImagem: 2,
  //     idCategoria: 1,
  //     selected: false,
  //     confirmed: false
  //   },
  //   {
  //     nome: 'Beleza',
  //     id: 50,
  //     idImagem: 2,
  //     idCategoria: 1,
  //     selected: false,
  //     confirmed: false
  //   },
  //   {
  //     nome: 'Margarinas e Manteigas',
  //     id: 51,
  //     idImagem: 2,
  //     idCategoria: 6,
  //     selected: false,
  //     confirmed: false
  //   },
  //   {
  //     nome: 'Pré Prontos',
  //     id: 52,
  //     idImagem: 2,
  //     idCategoria: 1,
  //     selected: false,
  //     confirmed: false
  //   },
  //   {
  //     nome: 'Arroz, Farinha e Açúcar',
  //     id: 53,
  //     idImagem: 2,
  //     idCategoria: 1,
  //     selected: false,
  //     confirmed: false
  //   },
  //   {
  //     nome: 'Café',
  //     id: 54,
  //     idImagem: 2,
  //     idCategoria: 1,
  //     selected: false,
  //     confirmed: false
  //   },
  //   {
  //     nome: 'Sucos',
  //     id: 55,
  //     idImagem: 2,
  //     idCategoria: 1,
  //     selected: false,
  //     confirmed: false
  //   },
  //   {
  //     nome: 'Salgadinhos',
  //     id: 56,
  //     idImagem: 2,
  //     idCategoria: 1,
  //     selected: false,
  //     confirmed: false
  //   },
  //   {
  //     nome: 'Vinagre',
  //     id: 57,
  //     idImagem: 2,
  //     idCategoria: 1,
  //     selected: false,
  //     confirmed: false
  //   },
  //   {
  //     nome: 'Dieta',
  //     id: 58,
  //     idImagem: 2,
  //     idCategoria: 1,
  //     selected: false,
  //     confirmed: false
  //   },
  //   {
  //     nome: 'Chá',
  //     id: 59,
  //     idImagem: 2,
  //     idCategoria: 1,
  //     selected: false,
  //     confirmed: false
  //   },
  //   {
  //     nome: 'Veneno',
  //     id: 60,
  //     idImagem: 2,
  //     idCategoria: 3,
  //     selected: false,
  //     confirmed: false
  //   },
  //   {
  //     nome: 'Talheres',
  //     id: 61,
  //     idImagem: 2,
  //     idCategoria: 1,
  //     selected: false,
  //     confirmed: false
  //   },
  //   {
  //     nome: 'Absorventes',
  //     id: 62,
  //     idImagem: 2,
  //     idCategoria: 4,
  //     selected: false,
  //     confirmed: false
  //   },
  //   {
  //     nome: 'Papel Higiênico',
  //     id: 63,
  //     idImagem: 2,
  //     idCategoria: 4,
  //     selected: false,
  //     confirmed: false
  //   },
  //   {
  //     nome: 'Higiene Bucal',
  //     id: 64,
  //     idImagem: 2,
  //     idCategoria: 4,
  //     selected: false,
  //     confirmed: false
  //   }
  // ],
  // totalSelected: 0
}

export const itemReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_SELECTED: {
      let id = action.itemId
      let item = state.itens.find(obj => obj.id === id)
      let sum = (item && item.selected) ? -1 : 1
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
    case TOGGLE_CONFIRMATION: {
      let id = action.itemId
      let itensArray = state.itens.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            confirmed: !item.confirmed
          }
        } else return item
      })
      return {
        ...state,
        itens: itensArray
      }
    }
    case RESET_BOOLEANS: {
      let itens = state.itens.map(item => {
        return {
          ...item,
          selected: false,
          confirmed: false
        }
      })
      return { 
        itens,
        totalSelected: 0
      }
    }

    case ATUALIZA_ITENS: {
      return {
        ...action.itens
      }
    }

    default:
      return state
  }
}