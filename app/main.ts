import App from './components/AppRoot'
import stores from './data/state'

import 'bootstrap/less/bootstrap.less'
import './main.less'

import NotFoundPage from './components/NotFoundPage'
import DebugPage from "./components/DebugPage"
import HomePage from "./components/HomePage"

// Should only do this for debug builds....
// if (MODE === 'development') {
//   npm install --save mobservable-react-devtools
//   require('mobservable-react-devtools')
// }

export function main() {
  const {route: { page, activate }, ui} = stores

  console.info(ui.name, ui.version, 'starting in mode:', MODE)

  page('/', activate(HomePage))
  page('/debug', activate(DebugPage))
  page('*', activate(NotFoundPage))

  page({
    click: false,
    hashbang: true
  })

  App.render(
    stores,
    document.getElementById('application')
  )
  // Just an example of an observed state change:
  setTimeout(_ => {
    ui.status = 'ready'
  }, 1000)
}

main()
