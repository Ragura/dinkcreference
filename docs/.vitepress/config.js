import { functions } from "./functions"

export default {
  title: 'DinkC Reference Guide',
  description: 'Documentation site for the DinkC scripting language for the game Dink Smallwood.',
  themeConfig: {
    repo: 'ragura/dinkcreference',
    docsDir: 'docs',
    docsBranch: 'main',
    algolia: {
      appId: 'V50FHKJ4OW',
      apiKey: '7ed2b7527d96d573bb2caa2dd8f86ab7',
      indexName: 'dinkcreference'
    },
    editLinks: true,
    editLinkText: 'Edit this page on GitHub',
    lastUpdated: 'Last Updated',

    nav: [
        { text: 'Guide', link: '/', activeMatch: '^/$|^/guide/' },
        {
          text: 'Functions',
          link: '/functions/',
          activeMatch: '^/functions/'
        },
    ],

    sidebar: {
      '/guide/': getGuideSidebar(),
      '/functions/': generateFunctionList(),
      // '/functions/': getFunctionsSidebar(),
      '/': getGuideSidebar()
    }
  }
}

function getGuideSidebar() {
  return [
    {
      text: 'DinkC language',
      items: [
        { text: 'Introduction', link: '/' },
        { text: 'What is DinkC?', link: '/guide/dinkc' },
        { text: 'Scripts', link: '/guide/scripts' },
        { text: 'Variables', link: '/guide/variables' },
        { text: 'Procedures', link: '/guide/procedures' },
        { text: 'Control Structures', link: '/guide/control-structures' }
      ]
    },
    {
      text: 'Techniques',
      items: [
        { text: 'Non-player characters', link: '/guide/npc' },
        { text: 'Plot', link: '/guide/plot' },
        { text: 'Enemies', link: '/guide/enemies' },
        { text: 'Combat', link: '/guide/combat' },
        { text: 'Items', link: '/guide/items' },
        { text: 'Warps', link: '/guide/warps' },
        { text: 'A Changing world', link: '/guide/changing-world' },
        { text: 'Screen Lock', link: '/guide/screenlock' },
        { text: 'Graphics', link: '/guide/graphics' },
        { text: 'YeDink ini parms', link: '/guide/yedink-ini-parms' },
      ]
    }
  ]
}

function generateFunctionList() {
  functionList = []
  
  Object.keys(functions).sort().forEach(key => {
    functionList.push({
      text: key.charAt(0).toUpperCase() + key.slice(1),
      items: functions[key].map(functionName => {
        return {
          text: functionName,
          link: `/functions/${functionName.replace(/_/g, "-")}`
        }
      })
    })
  })
  
  return functionList
}