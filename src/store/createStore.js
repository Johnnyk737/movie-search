/*
*  Customized Redux.createStore function
*/

import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger'
import thunkMiddleware from 'redux-thunk';
import rootReducer from './reducers/index';

const middleware = applyMiddleware(thunkMiddleware, logger);

const store = createStore(rootReducer, middleware)

export default store;
