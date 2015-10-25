var http = require("http"),
    httpProxy = require("http-proxy"),
    connect = require("connect"),
    webpack = require('webpack'),
    WebpackDevServer = require('webpack-dev-server'),
    config = require('./config/development')

async function dev_server(options, log) {
  log('running dev server...')

  var app, devServer,
      serverPort = config._serverPort,
      contentPort = serverPort + 1,
      proxy = new httpProxy.RoutingProxy()


  app = connect()
    .use( connect.favicon() )
    .use( connect.static( config._assetPath ) )
    // .use("/google", function(req, res) {
    //   console.log("Proxy:", req.originalUrl);
    //   req.url = req.originalUrl;
    //   return proxy.proxyRequest(req, res, {
    //     host: "www.google.com",
    //     port: "80",
    //     changeOrigin: true
    //   });
    // })


  http.createServer(app)
    .listen( contentPort, '0.0.0.0', function(err, result){
      if( err ) {
        log(err);
      }
      log("(internal) Content server listening at localhost:"+ contentPort)
    });

  devServer = new WebpackDevServer(webpack(config), {
      hot: true,
      noInfo: false,
      inline: true,
      colors: true,
      cache: true,
      // devtool: '#cheap-module-eval-source-map',
      devtool: 'source-map',
      debug: true,
      proxy: {
        "*": ("http://localhost:"+ contentPort)
      }
      // historyApiFallback: true
    })
    .listen( serverPort, '0.0.0.0', function (err, result) {
      if (err) {
        log(err);
      }
      log( 'Development server listening at localhost:'+ serverPort );
    });

}

export default dev_server
