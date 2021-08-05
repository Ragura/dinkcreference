import DefaultTheme from 'vitepress/theme'
import VersionInfo from './components/VersionInfo.vue'
import Prototype from './components/Prototype.vue'
import ColorBlock from './components/ColorBlock.vue'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    // register global components
    app.component('VersionInfo', VersionInfo)
    app.component('Prototype', Prototype)
    app.component('ColorBlock', ColorBlock)
  }
}