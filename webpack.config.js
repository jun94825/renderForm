var path = require('path');

module.exports = {
  context: path.resolve(__dirname, 'js'),
  entry: {
    index: './renderForm.js'
  },
  output: {
    path: path.resolve(__dirname, 'js'),
    filename: './renderForm.bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
};
