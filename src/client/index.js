import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRoute as Router} from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import counter from './reducers'
import App from './App';

// const routes = (
//   <Router>
//     <Route path='/' component={App}></Route>

//     {/* Catch all for routing errors */}
//     <Route path='*' ></Route>
//   </Router>
// )

// Grab the state from a global variable injected into the server-generated HTML
const preloadedState = window.__PRELOADED_STATE__

// Allow the passed state to be garbage-collected
delete window.__PRELOADED_STATE__

// Create Redux store with initial state
const store = createStore(counter, preloadedState)


const app = document.getElementById( "app" );
ReactDOM.hydrate(
  <Provider store={store}>
    <App />
  </Provider>, app );

// https://github.com/erikras/react-redux-universal-hot-example/tree/master/
