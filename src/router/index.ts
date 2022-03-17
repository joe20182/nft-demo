import { lazy } from 'react'
import { RouteConfig } from 'react-router-config'

const routesConfig: RouteConfig[] = [
  {
    path: '/',
    exact: true,
    component: lazy(() => import('@/views/Home')),
  },
  {
    path: '/mint',
    component: lazy(() => import('@/views/Mint')),
  },
  // {
  //   path: "*",
  //   component: lazy(() => import("@/views/Home")),
  // },
]

export default routesConfig
