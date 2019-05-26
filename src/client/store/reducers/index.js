import { searchTypes } from '../actions/actions'

// export default (state = 0, action) => {
//   switch (action.type) {
//     case 'INCREMENT':
//       return state + 1
//     case 'DECREMENT':
//       return state - 1
//     default:
//       return state
//   }
// }

export const searchType = (state = searchTypes.GENERAL, action) => {
  console.log('state', state);
  switch (action.type) {
    case 'SET_SEARCH_TYPE':
      return action.data.searchType;
    default:
      return state;
  }
}
