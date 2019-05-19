import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import counter from './reducers'
// import App from './App';
import { renderRoutes } from 'react-router-config'

import routes from './routes'


// // Grab the state from a global variable injected into the server-generated HTML
// const preloadedState = window.__PRELOADED_STATE__

// // Allow the passed state to be garbage-collected
// delete window.__PRELOADED_STATE__

// // Create Redux store with initial state
// const store = createStore(counter, preloadedState)

// Can't use React.Fragment here because https://github.com/facebook/react/issues/10591 (I think...)
const app = document.getElementById( "app" );
ReactDOM.hydrate(
  // <Provider store={store}>
    <Router>
      <div>
        {renderRoutes(routes)}
      </div>
    </Router>
  // </Provider>
  , app );

// https://github.com/erikras/react-redux-universal-hot-example/tree/master/
