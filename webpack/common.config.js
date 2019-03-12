const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ROOT_DIR = path.resolve(__dirname, '..');

const config = {
  entry: {
    'app': './src/index'
  },

  output: {
    path: path.join(ROOT_DIR, 'build'),
    filename: '[name].js',
  },

  resolve: {
    modules: ['src', 'tests', 'node_modules'],
    extensions: ['.ts', '.tsx', '.js']
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'App',
      template:  path.join(ROOT_DIR, 'public/index.html'),
    })
  ],

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