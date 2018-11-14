import request from '@/plugin/axios'

export function Login (data) {
  return request({
    url: '/login',
    method: 'post',
    data
  })
}