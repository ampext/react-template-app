const path = require('path');
const ROOT_DIR = path.resolve(__dirname, '..');

const config = {
  entry: {
    'app': './src/app'
  },

  output: {
    path: path.join(ROOT_DIR, 'build'),
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
        use: 'ts-loader',
        include: [
          path.join(ROOT_DIR, 'src'),
        ]
      }
    ]
  }
};

module.exports = config;