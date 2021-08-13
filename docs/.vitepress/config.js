const functions = require("./functions")

module.exports = {
  title: 'DinkC Reference Guide',
  description: 'Documentation site for the DinkC scripting language for the game Dink Smallwood.',
  themeConfig: {
    repo: 'ragura/dinkcreference',
    docsDir: 'docs',
    docsBranch: 'main',
    algolia: {
      apiKey: 'd8bdd81d89b6732129066fbee21cd8c8',
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
      children: [
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
      children: [
        { text: 'Non-player characters', link: '/guide/npc' },
        { text: 'Plot', link: '/guide/plot' },
        { text: 'Enemies', link: '/guide/enemies' },
        { text: 'Combat', link: '/guide/combat' },
        { text: 'Items', link: '/guide/items' },
        { text: 'Warps', link: '/guide/warps' },
        { text: 'A Changing world', link: '/guide/changing-world' },
        { text: 'Screen Lock', link: '/guide/screenlock' },
        { text: 'Graphics', link: '/guide/graphics' },
      ]
    }
  ]
}

function generateFunctionList() {
  functionList = []
  
  Object.keys(functions).sort().forEach(key => {
    functionList.push({
      text: key.charAt(0).toUpperCase() + key.slice(1),
      children: functions[key].map(functionName => {
        return {
          text: functionName,
          link: `/functions/${functionName.replace(/_/g, "-")}`
        }
      })
    })
  })
  
  return functionList
}