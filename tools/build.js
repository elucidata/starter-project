import clean from './clean'
import run from './run'

function compile(log) {
  return new Promise((resolve, reject) => {
    var webpack = require('webpack')
    var config = require('./config/production')

    webpack(config, (err, stats) => {
      log(stats.toString({
        colors: true,
        chunks: false
      }))

      if (err) {
        log("Error:", err)
        reject(err)
      } else {
        log("Done.")
        resolve(stats)
      }
    })
  })
}

async function build(options, log) {
  await run(clean)
  await compile(log)
}

export default build
