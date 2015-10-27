import * as React from 'react'
import {observer} from 'mobservable-react'
import {AppStores} from '../data/state'

import Link from './Link'

interface MainLayoutProps extends React.Props<MainLayout> {
  stores: AppStores
}

@observer
export class MainLayout extends React.Component<MainLayoutProps, {}> {

  handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    console.log('Hello!')
  }

  render() {
    let {children, stores: { ui }} = this.props

    return (
      <div>
        <header onClick={ this.handleClick }>
          Starter Project
          <small>{ ui.isReady ? ' - Ready!' : ' - Loading...'}</small>
        </header>
        <section>
          { children }
        </section>
        <footer>
          <nav style={{ float: 'right' }}>
            <Link path="/">Home</Link>
            &nbsp;-&nbsp;
            <Link path="/debug">Debug</Link>
            &nbsp;-&nbsp;
            <Link path="/nope">Missing</Link>
          </nav>
          v{ ui.version } ({ MODE })
        </footer>
      </div>
    )
  }

}

export default MainLayout
