var path = require('path'),
    webpack = require('webpack'),
    merge = require('webpack-merge'),
    common = require('./common')

var serverPort = 8080,
    config = common(true)

module.exports = merge(config, {
  _serverPort: serverPort,
  cache: true,
  debug: true,
  // devtool: '#cheap-module-eval-source-map',
  devtool: 'source-map',

  entry: {
    javascript: [
      ('webpack-dev-server/client?http://0.0.0.0:' + serverPort), // WebpackDevServer host and port
      'webpack/hot/only-dev-server',
      config._entryPoint
    ],
  },

  output: {
    publicPath: ('http://localhost:' + serverPort + '/') // Required for webpack-dev-server
  },

  devServer: {
    contentBase: config._assetPath,
    noInfo: false, //  --no-info option
    hot: true,
    inline: true,
    colors: true,
    cache: true
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]

})
