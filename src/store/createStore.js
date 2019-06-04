/*
*  Customized Redux.createStore function
*/

import { applyMiddleware, createStore, compose } from 'redux';
import logger from 'redux-logger'
import thunkMiddleware from 'redux-thunk';
import rootReducer from './reducers/index';

const middleware = applyMiddleware(thunkMiddleware, logger);
// const composeEnhancers = typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, middleware)

export default store;
