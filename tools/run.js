// See react-boilerplate for more...

function format(time) {
  return time.toTimeString().replace(/.*(\d{2}:\d{2}:\d{2}).*/, '$1')
}

async function run(fn, options={}) {
  const log = (...args)=> {
    console.log(`[${format(new Date())}] ${fn.name}:`, ...args)
  }
  const start = new Date()
  console.log(`[${format(start)}] Starting '${fn.name}'...`)

  await fn(options, log)

  const end = new Date()
  const time = end.getTime() - start.getTime()
  console.log(`[${format(end)}] Finished '${fn.name}' after ${time} ms`)
}

if (process.mainModule.children.length === 0 && process.argv.length > 2) {
  delete require.cache[__filename]
  const module = process.argv[2]
  run(require('./' + module + '.js')).catch(err => console.error(err.stack))
}

export default run
