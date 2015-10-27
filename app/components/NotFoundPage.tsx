import * as React from 'react'
import {observer} from 'mobservable-react'
import {AppStores} from '../data/state'

import MainLayout from './MainLayout'

interface NotFoundPageProps extends React.Props<NotFoundPage> {
  stores: AppStores,
  routeInfo: PageJS.Context
}

/*@observer*/
export class NotFoundPage extends React.Component<NotFoundPageProps, {}> {
  render() {
    return (
      <MainLayout stores={this.props.stores}>
        NotFoundPage
      </MainLayout>
    )
  }
}

export default NotFoundPage
