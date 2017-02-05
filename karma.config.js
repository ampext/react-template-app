module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],

    files: ['karma-entry.js'],

    preprocessors: {
      'karma-entry.js': ['webpack']
    },

    webpack: require('./webpack.tests.config.js'),

    webpackMiddleware: {
      noInfo: true
    }
  });
};
