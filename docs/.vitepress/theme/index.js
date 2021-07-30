import DefaultTheme from 'vitepress/theme'
import VersionInfo from './components/VersionInfo.vue'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    // register global components
    app.component('VersionInfo', VersionInfo)
  }
}