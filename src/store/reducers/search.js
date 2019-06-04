import { searchTypes } from '../actions/actions'

/* Search Action Reducer
 * Responds to all the actions by changing state
 */

const defaultState = {
  searchType: 's',
  searchString: '',
  // movies: [],
  // totalResults: 0,
  // recievedDt: ''
}

function searchType(state = defaultState, action) {
  console.log('state', state);
  switch (action.type) {
    case 'SET_SEARCH_TYPE':
      return {
        ...state,
        searchType: action.searchType
      }
    case 'SET_SEARCH_STRING':
      return {
        ...state,
        searchString: action.searchString
      }
    case 'RECIEVE_MOVIES':
      return {
        ...state,
        // searchString,
        movies: action.movies,
        totalResults: action.totalResults,
        recievedDt: action.recievedDt
      }
    default:
      return state;
  }
}

export default searchType;
