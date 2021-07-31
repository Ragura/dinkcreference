import DefaultTheme from 'vitepress/theme'
import VersionInfo from './components/VersionInfo.vue'
import Prototype from './components/Prototype.vue'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    // register global components
    app.component('VersionInfo', VersionInfo)
    app.component('Prototype', Prototype)
  }
}