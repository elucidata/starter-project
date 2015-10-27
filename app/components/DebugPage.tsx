import * as React from 'react'
import {observer} from 'mobservable-react'
import {AppStores} from '../data/state'

import MainLayout from './MainLayout'

interface DebugPageProps extends React.Props<DebugPage> {
  stores: AppStores,
  routeInfo: PageJS.Context
}

/*@observer*/
export class DebugPage extends React.Component<DebugPageProps, {}> {
  render() {
    return (
      <MainLayout stores={this.props.stores}>
        DebugPage
      </MainLayout>
    )
  }
}


export default DebugPage
