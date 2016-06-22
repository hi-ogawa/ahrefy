module.exports = {
  entry: './src/ahrefy.js',
  devtool: 'source-map',
  output: {
    path: './lib',
    filename: 'ahrefy.js',
    library: 'Ahrefy'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/,
        query: {
          presets: ['es2015']
        }
      }
    ]
  },
  resolve: { root: './src' }
}
