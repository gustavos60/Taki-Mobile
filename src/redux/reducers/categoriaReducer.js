const initialState = {
  categorias: [
    {
      nome: 'Escritório',
      id: 1
    },
    {
      nome: 'Festas',
      id: 2
    },
  ]
}

export const categoriaReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
  }
}