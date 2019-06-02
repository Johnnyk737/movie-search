import Axios from 'axios'
import config from '../../../config/keys.json'

/*
 * Holds all the actions and action creators
 * Action creators are called from the presentation components
*/

export const fetchMovies = (searchType, searchString) => {

  return function(dispatch) {
    dispatch(setSearchString(searchString))

    return Axios.get(`http://www.omdbapi.com/?${searchType}=${searchString}&apikey=${config.omdb_api}`)
      .then(
        response => response.data,
        error => console.log("Error during fetch: " + error)
      )
      .then(data => {
        dispatch(recieveMovies(searchString, data))
        console.log(data)
      })
  }
}

// function shouldFetchMovies(state, movies) {
//   const posts = state.postsBySubreddit[subreddit]
//   if (!posts) {
//     return true
//   } else if (movie.isFetching) {
//     return false
//   } else {
//     return posts.didInvalidate
//   }
// }

export const setSearchType = (searchType) => ({
  type: 'SET_SEARCH_TYPE',
  searchType
})

export const setSearchString = (searchString) => ({
  type: 'SET_SEARCH_STRING',
  searchString
})

const recieveMovies = (searchString, movies) => ({
  type: 'RECIEVE_MOVIES',
  searchString,
  movies: movies.Search,
  totalResults: movies.totalResults,
  recievedDt: Date.now()
})

export const searchTypes = {
  GENERAL: 's',
  TITLE: 't'
}
