import Search from './Search'
import App from './App'

const routes = [
  {
    component: App,
    path: '/',
    exact: true
  },
  {
    component: Search,
    path: '/search',
    exact: true
  }
]

export default routes
