var path = require("path");

module.exports = {
  context: __dirname,
  entry: "./frontend/goRemoteJobs.jsx",
  output: {
    path: path.join(__dirname, 'assets', 'javascript'),
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: [/\.jsx?$/, /\.js?$/],
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
  devtool: 'source-maps',
  resolve: {
    extensions: [".js", ".jsx"]
  }
};
