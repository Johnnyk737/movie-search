import { searchTypes } from '../actions/actions'

const defaultState = {
  searchType: 's',
  searchString: ''
}

function searchType(state = defaultState, action) {
  console.log('state', state);
  switch (action.type) {
    case 'SET_SEARCH_TYPE':
      return {
        ...state,
        searchType: action.data.searchType
      }
      break;
    case 'SET_SEARCH_STRING':
      return {
        ...state,
        searchString: action.data.searchString
      }
    default:
      return state;
  }
}

export default searchType;
