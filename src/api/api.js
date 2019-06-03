import axios from axios

const api = axios.create({
  baseURL: 'http://157.230.177.36:8080',
})

export default api