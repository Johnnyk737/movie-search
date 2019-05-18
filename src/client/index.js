import React from 'react';
import ReactDOM, { Route, BrowserRoute as Router, Switch} from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

// const routes = (
//   <Router>
//     <Route path='/' component={App}></Route>

//     {/* Catch all for routing errors */}
//     <Route path='*' ></Route>
//   </Router>
// )


const app = document.getElementById( "app" );
ReactDOM.hydrate( <App />, app );

// https://stackoverflow.com/questions/36233309/react-js-serverside-rendering-and-event-handlers
// https://github.com/erikras/react-redux-universal-hot-example/tree/master/
