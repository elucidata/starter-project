import * as React from 'react';
import routeStore from '../data/RouteStore'

interface LinkProps extends React.Props<Link> {
  href?: string
  path?: string
  className?: string
  activeClassName?: string
  inactiveClassName?: string
}

/*@observer*/
export class Link extends React.Component<LinkProps, {}> {

  handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    routeStore.page(this.props.path)
  }

  render() {
    let {href, path, children, className = "", activeClassName="active", inactiveClassName=""} = this.props

    if (path === routeStore.context.path) {
      className = `${ className } ${ activeClassName }`
    }
    else {
      className = `${ className } ${ inactiveClassName }`
    }

    if (this.props.href) {
      return <a href={ href } className={'Link ' + className}>{ children }</a>
    }
    else {
      return <a href={`#!${ path }`} className={'Link ' + className} onClick={this.handleClick}>{ children }</a>
    }
  }

}

export default Link
