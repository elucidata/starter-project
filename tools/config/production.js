var path = require('path'),
    webpack = require('webpack'),
    merge = require('webpack-merge'),
    common = require('./common')

var ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = merge(common(false), {
  cache: false,

  debug: false,

  plugins: [
    new ExtractTextPlugin("application/theme.[hash:6].css", { //[name].[chunkhash].css
      allChunks: true
    }),
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
  ]

})
