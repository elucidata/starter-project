import {observable, asReference, transaction} from 'mobservable'
import * as page from 'page'
import * as React from 'react'

export class RouteStore {

  @observable current: any = asReference(null)
  @observable context: PageJS.Context = asReference(null)

  page: PageJS.Static = page

  activate = (ViewClass) => {
    return (ctx) => {
      transaction(() => {
        this.current = ViewClass
        this.context = ctx
      })
    }
  }

}

export default new RouteStore()
