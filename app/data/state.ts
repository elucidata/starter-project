import ui, {UIStore} from './UIStore'
import route, {RouteStore} from './RouteStore'

export class AppStores {
  ui = ui
  route = route
}

export {
  UIStore,
  RouteStore
}

export default new AppStores()
