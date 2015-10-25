import * as React from 'react'
import MainLayout from './MainLayout'
import {AppStores} from '../data/state'

interface AppRootProps extends React.Props<AppRoot> {
  stores: AppStores
}

export class AppRoot extends React.Component<AppRootProps, {}>{
  render() {
    let { stores } = this.props

    return (
      <MainLayout stores={ stores }>
        <div>
          Your application content goes here.
        </div>
      </MainLayout>
    )
  }
}

export default AppRoot
