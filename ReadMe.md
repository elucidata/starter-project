# Starter Project

A simple "get up and running quickly" project starter. Not meant to be gospel,
nor even suggested structure -- Merely a fast way to start a project that could
be built for production in a pinch.

I primarily use it for prototypes and product experiments.

Out of the box support for:

- React
- Mobservable w/React support
- Simple routing with Page.js
- Webpack w/loaders for:
    - TypeScript
    - Less CSS
    - Hot Reloading
    - Others...


## Development

```
$ npm start
```

Open your browser to <http://localhost:8080> and you're good to go!


## Building

Build scripts are just javascript files under: `tools/`. Run them directly:

```
$ babel-node tools/run build
```

Or via npm scripts:

```
$ npm run build
```


## Application

The starter code has a simple layout (so it's easy to scrap, if you please) for
use with Mobservable.

All source code is under: `app/`


### Routing

Routes are defined in `app/main.ts` using Page.js:

```javascript
import stores from './data/state'

const {route: { page, activate }} = stores

page('/', activate(HomePage))
page('/debug', activate(DebugPage))
page('*', activate(NotFoundPage))

page({
  click: false,
  hashbang: true
})
```


### State Data

All the application data stores are under: `app/data/`


### Validators

Validators are simple functions that accept value objects and return an `object`
containing error messages for invalid fields.

```javascript
import collapse from '../tools/collapse'

export function validatePost( post ) {
  return collapse({
    title: !post.title && "Title is missing",
    body: !post.body && "Body is missing"
  })
}

export default validatePost
```


### Views

All the view components are under: `app/components/`

There is no difference between components that are smart/dumb, connected/pure,
container/simple, or whatever you want to call them. Basically any component
that accesses state can be made reactive by adding an `@observer` decorator:

```javascript
import * as React from 'react'
import {observer} from 'mobservable-react'
import {AllStores} from '../data/state'
import './Page.less'

interface PageProps extends React.Props<Page> {
  stores: AllStores
}

@observer
export class Page extends React.Component<PageProps, {}> {
  render() {
    let {stores} = this.props

    return (
      <div>v{ stores.ui.version }</div>
    )
  }
}
```


### Misc Tools

All generic tools/helpers are under: `app/tools/`


### Main Entry

The application's main entry is at: `app/main.ts`

That's really all you need to know to get started!
