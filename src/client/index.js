import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

/* For this to work properly, .babelrc needs to transpile react first, then env
*/

const app = document.getElementById( "app" );
ReactDOM.hydrate( <App />, app );

// https://stackoverflow.com/questions/36233309/react-js-serverside-rendering-and-event-handlers
// https://github.com/erikras/react-redux-universal-hot-example/tree/master/