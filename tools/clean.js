import * as shell from 'shelljs'

async function clean(options, log) {
  shell.rm('-rf', './dist/*');
}

export default clean
