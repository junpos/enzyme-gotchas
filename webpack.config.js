var path = require('path');

module.exports = {
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        include: [
          /test/,
          /src/
        ],
        query: {
          babelrc: false,
          presets: [
            'es2015',
            'react'
          ]
        }
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.json'],
    modules: [
      path.resolve('./src'),
      './node_modules'
    ]
  }
};
