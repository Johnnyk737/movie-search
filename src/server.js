const express = require('express');


const port = 2500;
const server = express();

server.use(express.static('dist'))
server.get('/', (req, res) => {
  /*
  * renderToString() will take our React app and turn it into a string
  * to be inserted into our Html template function.
  * 
  * TODO
  * Not quite done here.  It's rendering the app properly, replacing the body as expected.
  * However, I'm not sure if it's properly rendering on the server side first.
  * Still some work to do here
  */
 
 // const sheet = new ServerStyleSheet();
//  const body = renderToString(App);
 const body = "Hello John"; //works
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
    </head>
    <body style="margin:0">
      <div id="app">${body}</div>
      <script src="./bundle.js"></script>
    </body>
  </html>
`;

server.listen(port);
console.log(`Serving at http://localhost:${port}`);