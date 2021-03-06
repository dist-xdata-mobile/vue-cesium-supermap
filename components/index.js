import { version } from '../package.json'
import SmViewer from './viewer/viewer.vue'
export default {
  install (Vue, options) {
    const { cesiumPath } = options
    Vue.prototype._Cesium = () => ({ cesiumPath })
    Vue.component('sm-viewer', SmViewer)
  },
  version
}

export { SmViewer }
