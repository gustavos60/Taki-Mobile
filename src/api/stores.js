import api from './api'

export const getStores = async () => {
  try {
    const resp = await api.get('/stores')
    return resp.data
  } catch (error) {
    console.log(error)
    return null
  }
}

export const getStoreProducts = async (id) => {
  try {
    const resp = await api.get(`/store/${id}/products`)
    return resp.data
  } catch (error) {
    console.log(error)
    return null
  }
}