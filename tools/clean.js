import * as shell from 'shelljs'

async function clean(options, log) {
  shell.exec("find . -name '*.DS_Store' -type f -delete")
  shell.rm('-rf', './dist/*')
}

export default clean
