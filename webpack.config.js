module.exports = {
  entry: {
    'app': './src/app'
  },

  output: {
    path: 'build',
    filename: '[name].js',
    library: '[name]'
  },

  resolve: {
    modules: ['src', 'tests', 'node_modules'],
    extensions: ['.ts', '.tsx', '.js']
  },

  devtool: 'source-map',

  module: {
    loaders: [
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader'
      }
    ]
  }
};