var testContext = require.context(
  './tests', true, /-spec\.tsx?$/
);
testContext.keys().forEach(testContext);
