var path = require('path')
var webpack = require('webpack')
module.exports = {
  entry: {
    app: path.resolve(__dirname, 'src/app.react.js'),
    vendor: [
      'react',
      'react-dom'
    ]
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: 'build'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel'
      },
      {
        test: /\.rdt/,
        loader: 'babel!' + path.resolve(__dirname, './loader/rdt-loader.js')
      }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({ name: 'vendor', filename: 'vendor.bundle.js' })
  ]
}
