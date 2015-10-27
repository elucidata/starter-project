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
          <span className="glyphicon glyphicon-search" aria-hidden="true"></span> Starter Project
          <small>{ ui.isReady ? ' - Ready!' : ' - Loading...'}</small>
        </header>
        <section>
          { children }
        </section>
        <footer>
          <nav style={{ float: 'right' }}>
            <div className="btn-group" role="group" aria-label="...">
              <Link className="btn btn-default" activeClassName="btn-primary" path="/">Home</Link>
              <Link className="btn btn-default" activeClassName="btn-primary" path="/debug">Debug</Link>
              <Link className="btn btn-default" activeClassName="btn-primary" path="/nope">Missing</Link>
            </div>
          </nav>
          v{ ui.version } ({ MODE })
        </footer>
      </div>
    )
  }

}

export default MainLayout
