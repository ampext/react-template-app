const config = require('./common.config');
const merge = require('webpack-merge');

module.exports = merge(config, {
  mode: 'production'
});