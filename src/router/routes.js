import Layout from '@/views/layout'

const frameIn = [
  {
    path: '/',
    redirect: { name: 'home' },
    component: Layout,
    children: [
      {
        path: 'home',
        name: 'home',
        component: () => import('@/views/home')
      }
    ]
  }
]

const frameOut = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login')
  }
]

export default [
  ...frameIn,
  ...frameOut
]