import axios from 'axios'

export const instance = axios.create({
  baseURL: process.env.REACT_APP_GITHUB_URL,
  timeout: 1000
})

instance.interceptors.request.use(config => {
  const token = process.env.REACT_APP_GITHUB_TOKEN

  return {
    ...config,
    headers: {
      ...config.headers,
      Authorization: token ? `token ${token}` : ''
    }
  }
})

instance.interceptors.response.use(
  response => response,
  error => {
    if (error?.response?.status != 401) return Promise.reject(error)
  }
)
