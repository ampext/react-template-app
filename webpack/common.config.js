const path = require('path');

const config = {
  entry: {
    'app': './src/app'
  },

  output: {
    path: path.resolve(__dirname, '../build'),
    filename: '[name].js',
  },

  resolve: {
    modules: ['src', 'tests', 'node_modules'],
    extensions: ['.ts', '.tsx', '.js']
  },

  devtool: 'source-map',

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader'
      }
    ]
  }
};

module.exports = config;