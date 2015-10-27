import * as React from 'react'
import {observer} from 'mobservable-react'
import {AppStores} from '../data/state'

import MainLayout from './MainLayout'

interface HomePageProps extends React.Props<HomePage> {
  stores: AppStores,
  routeInfo: PageJS.Context
}

/*@observer*/
export class HomePage extends React.Component<HomePageProps, {}> {
  render() {
    return (
      <MainLayout stores={this.props.stores}>
        HomePage
      </MainLayout>
    )
  }
}

export default HomePage
