import express from 'express'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import counter from './client/reducers'
import App from './client/App'


const port = 2500;
const server = express();

server.use(express.static('dist'))
server.use((req, res) => {

  let store = createStore(counter)

  const body = renderToString(
    <Provider store={store}>
      <App />
    </Provider>
  );
  var title = 'Movie Search';

  let preloadedState = store.getState();

  res.send(
    renderHtml(
      body,
      title,
      preloadedState
    )
  );
});

/* Function call to render initial HTML
*/
const renderHtml = (body, title, preloadedState) => `
  <!DOCTYPE html>
  <html>
    <head>
      <title>${title}</title>
      <link href="https://fonts.googleapis.com/css?family=Roboto:300" rel="stylesheet">
    </head>
    <body style="margin:0">
      <div id="app">${body}</div>
      <script>
        window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
      </script>
      <script src="./bundle.js"></script>
    </body>
  </html>
`;

server.listen(port);
console.log(`Serving at http://localhost:${port}`);

// https://redux.js.org/recipes/server-rendering
