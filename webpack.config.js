const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const path = require('path');

module.exports = {
  // Entry point where it starts the process
  // Does not work when set to express server, does work when set to client
  // Currently unsure exactly why
  entry: {
    index: './src/client/index.js', //"./src/server.js", 
  },
  // Defines the output path after webpack does its stuff
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  // Not entirely sure what these are for.
  // target: 'node',
  // externals: [nodeExternals()],
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: `'production'`
      }
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        }
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "css-loader", // translates CSS into CommonJS
            options: {
              modules: true
            }
          }
        ]
      }
    ]
  }
};

// https://medium.com/styled-components/the-simple-guide-to-server-side-rendering-react-with-styled-components-d31c6b2b8fbf