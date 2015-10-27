import {observable} from 'mobservable'

export class UIStore {

  built = new Date(BUILT)
  name = NAME
  version = VERSION
  mode = MODE

  @observable remoteConnection = false
  @observable status = 'uninitiated'

  @observable get isReady() {
    return this.status === 'ready'
  }

  setRemoteConnection(value: boolean) {
    this.remoteConnection = value
  }

}

export default new UIStore()
