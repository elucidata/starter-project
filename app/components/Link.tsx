import * as React from 'react';
import routeStore from '../data/RouteStore'

interface LinkProps extends React.Props<Link> {
  /** Resource Path */
  path: string
  /** Whether it's an internal or external path */
  external?: boolean
  className?: string
  activeClassName?: string
  inactiveClassName?: string
}

export class Link extends React.Component<LinkProps, {}> {

  private handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    routeStore.page(this.props.path)
  }

  render() {
    let {external, path, children, className = "", activeClassName = "active", inactiveClassName = ""} = this.props

    if (path === routeStore.context.path) {
      className = `${className} ${activeClassName}`
    }
    else {
      className = `${className} ${inactiveClassName}`
    }

    if (external) {
      return <a href={ path } className={'Link ' + className}>{ children }</a>
    }
    else {
      return <a href={`#!${path}`} className={'Link ' + className} onClick={this.handleClick}>{ children }</a>
    }
  }

}

export default Link
