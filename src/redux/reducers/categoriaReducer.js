const initialState = {
  categorias: [
    {
      nome: 'Escritório',
      id: 1
    },
    {
      nome: 'Carnes e Peixes',
      id: 2
    },
    {
      nome: 'Limpeza',
      id: 3
    },
    {
      nome: 'Higiene Pessoal',
      id: 4
    },
    {
      nome: 'Frutas e Verduras',
      id: 5
    },
    {
      nome: 'Laticínios',
      id: 6
    },
  ]
}

export const categoriaReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
  }
}