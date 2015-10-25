import * as React from 'react'
import {observer} from 'mobservable-react'
import {AppStores} from '../data/state'

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
    let {children, stores:{ui}} = this.props

    return (
      <div>
        <header onClick={ this.handleClick }>
          Starter Project
          { ui.isReady ? ' - Ready!' : ' - Loading...'}
        </header>
        <section>
          { children }
        </section>
        <footer>
          v{ ui.version } ({ MODE })
        </footer>
      </div>
    )
  }

}

export default MainLayout
