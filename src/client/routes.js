import Search from './Search'
import App from './App'
import SavedMovies from './SavedMovies'

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
  },
  {
    component: SavedMovies,
    path: '/mylist',
    exact: true
  }
]

export default routes
