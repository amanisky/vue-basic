import axios from 'axios'

const server = axios.create({
  baseURL: '/api'
})

/**
 * 请求拦截器
 */
axios.interceptors.request.use(function (config) {
  config.headers['Authorization'] = 'Bear amaniskyappleshy'
  return config
}, function (error) {
  return Promise.reject(error)
})

/**
 * 响应拦截器
 */
axios.interceptors.response.use(function (response) {
  return response;
}, function (error) {
  return Promise.reject(error);
});

export default server