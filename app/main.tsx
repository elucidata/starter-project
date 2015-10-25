import * as React from 'react'
import {render} from 'react-dom'
import App from './components/AppRoot'
import stores from './data/state'

import './main.less'

if( MODE === 'development' ) {
  // Should only do this for debug builds....
  require('mobservable-react-devtools')
}

export function main() {
  console.info(stores.ui.name, stores.ui.version, 'starting in mode:', MODE)

  render(
    <App stores={stores} />,
    document.getElementById('application')
  )

  setTimeout( _ => {
    stores.ui.status = 'ready'
  }, 1000)
}

main()
