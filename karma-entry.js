if (!window.requestAnimationFrame) {
  // polyfill for jsdom
  window.requestAnimationFrame = function(fn) { setTimeout(fn, 0) };
}

var testContext = require.context(
  './tests', true, /.test\.tsx?$/ 
);
testContext.keys().forEach(testContext);
