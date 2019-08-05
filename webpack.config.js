const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    'bundle': './src/index'
  },

  resolve: {
    modules: ['src', 'tests', 'node_modules'],
    extensions: ['.ts', '.tsx', '.js']
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'App',
      template:  path.join(__dirname, 'public/index.html'),
    })
  ],

  devtool: 'source-map',

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        include: [
          path.resolve(__dirname, 'src'),
        ]
      }
    ]
  },

  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    compress: true,
    port: 9000
  }
};