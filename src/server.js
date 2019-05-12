import express from 'express'
import React from 'react'
import { renderToString } from 'react-dom/server'
import App from './client/App'


const port = 2500;
const server = express();

server.use(express.static('dist'))
server.get('/', (req, res) => {
  /*
  * renderToString() will take our React app and turn it into a string
  * to be inserted into our Html template function.
  */

 // const sheet = new ServerStyleSheet();
 // This works when server is set to entry in webpack, but I no longer get console outputs.
 const body = renderToString(<App />);
//  const body = "Hello John"; //works
 var title = 'Movie Search';
  // const styles = sheet.getStyleTags(); // <-- getting all the tags from the sheet

  res.send(
    renderHtml(
      body,
      title
    )
  );
});

/* Function call to render initial HTML
*/
const renderHtml = (body, title) => `
  <!DOCTYPE html>
  <html>
    <head>
      <title>${title}</title>
      <link href="https://fonts.googleapis.com/css?family=Roboto:300" rel="stylesheet">
    </head>
    <body style="margin:0">
      <div id="app">${body}</div>
      <script src="./bundle.js"></script>
    </body>
  </html>
`;

server.listen(port);
console.log(`Serving at http://localhost:${port}`);
