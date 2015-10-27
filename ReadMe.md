# Starter Project

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

The starter code has a simple layout (so it's easy to scrap, if you please) for use with Mobservable.

All source code is under: `app/`


## Routing

Routes are defined in `app/main.ts` using Page.js.


### State Data

All the application data stores are under: `app/data/`


### Views

All the view components are under: `app/components/`

There is no difference between components that are smart/dumb, connected/pure, container/simple, or whatever you want to call them. Basically any component that accesses state can be made reactive by adding an `@observer` decorator:

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
