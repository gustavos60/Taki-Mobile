import axios from axios

const api = axios.create({
  baseURL: 'http://157.230.177.36:8080',
})

export const addToken = async (token) => {
  api.defaults.headers.common['Authorization'] = 'Bearer ' + token
}

export default api