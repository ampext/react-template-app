module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    
    reporters: ['mocha'],

    files: ['karma-entry.js'],

    preprocessors: {
      'karma-entry.js': ['webpack']
    },

    webpack: require('./webpack/dev.config.js'),

    browsers: ['jsdom', 'ChromeHeadless'],

    webpackMiddleware: {
      noInfo: true
    },

    jsdomLauncher: {
      jsdom: {
        pretendToBeVisual: true
      }
    }
  });
};
