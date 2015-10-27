var path = require('path'),
    webpack = require('webpack'),
    merge = require('webpack-merge'),
    pkg = require('../../package.json')

var HtmlWebpackPlugin = require('html-webpack-plugin'),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    SplitByPathPlugin = require('webpack-split-by-path')

var ROOT_PATH = path.resolve(path.join(__dirname), '..', '..'),
    SRC_PATH = path.join(ROOT_PATH, "app"),
    ASSET_PATH = path.join(ROOT_PATH, "assets"),
    MEDIA_PATH = path.join(ASSET_PATH, "media"),
    NPM_PATH = path.join(ROOT_PATH, "node_modules"),
    DIST_PATH = path.join(ROOT_PATH, "dist"),
    VENDOR_PATH = path.join(ROOT_PATH, "vendor"),
    ENTRY_POINT = './main.ts'

// console.log("SRC_PATH:", SRC_PATH)

module.exports = (isDevMode) => ({
  _rootPath: ROOT_PATH,
  _srcPath: SRC_PATH,
  _assetPath: ASSET_PATH,
  _entryPoint: ENTRY_POINT,

  context: SRC_PATH,

  resolve: {
    root: SRC_PATH,
    extensions: ["", ".webpack.js", ".web.js", ".js", ".ts", ".tsx", ".json", ".coffee"],
    alias: {
      assets: ASSET_PATH,
      media: MEDIA_PATH,
      vendor: VENDOR_PATH
    }
  },

  entry: {
    javascript: ENTRY_POINT,
    vendors: Object.keys(pkg.dependencies),
  },

  noParse: [
    NPM_PATH,
    VENDOR_PATH
  ],

  output: {
    filename: "application/app-core.[hash:6].js",
    path: DIST_PATH,
  },

  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loaders: isDevMode ? ["react-hot", "babel-loader?optional[]=runtime&stage=0"] : ["babel-loader?optional[]=runtime&stage=0"]
    }, {
      test: /\.tsx?$/,
      exclude: /node_modules/,
      loaders: isDevMode ? ["react-hot", "ts-loader"] : ["ts-loader"]
    }, {
      test: /\.coffee$/,
      exclude: /node_modules/,
      loaders: [
        "coffee-loader"
      ]
    }, {
      test: /\.html$/,
      include: SRC_PATH,
      loader: "file?name=[name].[ext]",
    }, {
      test: /\.json$/,
      include: SRC_PATH,
      loader: "json-loader",
    }, {
      test: /\.less$/,
      loader: isDevMode ?
        "style!css!autoprefixer!less" : ExtractTextPlugin.extract("style-loader", "css!autoprefixer!less")
    }, {
      test: /\.css$/,
      loader: isDevMode ?
        "style!css!autoprefixer" : ExtractTextPlugin.extract("style-loader", "css!autoprefixer")
    }, {
      test: /\.(jpeg|jpg|jpe|gif|png|wav|mp3|otf|eot|svg|ttf|woff|woff2)(\?.*)*$/,
      // loader: "url-loader?limit=8192"
      loader: "file?name=application/asset-[name]-[hash:6].[ext]"
    }, ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: pkg.name,
      version: pkg.version,
      hash: true,
      template: path.resolve(ASSET_PATH, 'index.html')
    }),
    new webpack.optimize.CommonsChunkPlugin(
      'vendors',
      'application/app-libs.[hash:6].js'
    ),
    new webpack.DefinePlugin({
      'process.env': {
        // This has effect on the react lib size
        'NODE_ENV': JSON.stringify(isDevMode ? 'development' : 'production')
      },
      NAME: JSON.stringify(pkg.name),
      VERSION: JSON.stringify(pkg.version),
      MODE: JSON.stringify(isDevMode ? 'development' : 'production'),
      BUILT: JSON.stringify(new Date()),
      DEBUG: JSON.stringify(isDevMode),
      PRODUCTION: JSON.stringify(!isDevMode)
    }),
  ],

  node: {
    filename: true,
    dirname: true, //"mock"
    process: false,
    global: true
  },
})
