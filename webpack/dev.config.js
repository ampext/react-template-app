const path = require('path');
const config = require('./common.config');
const merge = require('webpack-merge');

module.exports = merge(config, {
  mode: 'development',

  devServer: {
    contentBase: path.resolve(__dirname, '../build'),
    compress: true,
    port: 9000
  }
});