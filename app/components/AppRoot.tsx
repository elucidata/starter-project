import * as React from 'react'
import {observer} from 'mobservable-react'
import {render} from 'react-dom'
import {AppStores} from '../data/state'

import NotFoundPage from './NotFoundPage'

interface AppRootProps extends React.Props<AppRoot> {
  stores: AppStores
}

@observer
export class AppRoot extends React.Component<AppRootProps, {}>{
  render() {
    const { stores } = this.props
    const { current: ViewClass, context: ctx } = stores.route

    console.debug("Route view:", ViewClass ? ViewClass.name : 'None')//, ctx )

    return ViewClass ?
      <ViewClass stores={stores} routeInfo={ ctx } /> :
      <NotFoundPage stores={stores} routeInfo={ ctx } />
  }

  static render(stores: AppStores, toNode: HTMLElement) {
    render(
      <AppRoot stores={stores}/>,
      toNode
    )
  }
}

export default AppRoot
