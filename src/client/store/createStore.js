/*
*  Customized Redux.createStore function
*/

import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger'
// import thunk from 'redux-thunk';

import { searchType } from './reducers/index';
// import rootReducer from './reducers/index';

const middleware = applyMiddleware(logger);

let store = createStore(searchType, middleware)

export default store;
