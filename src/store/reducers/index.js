import { combineReducers } from 'redux'

import search from './search'

/* Index Reducer
 * Used to combine all other reducers
 */

export default combineReducers({
  search,
})
