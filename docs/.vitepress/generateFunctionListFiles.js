const fs = require("fs")
const functionList = require("./functions")

// Read array of functions to create files for each of them
Object.keys(functionList).reduce((acc, key) => {
  acc.push(...functionList[key])
  return acc
}, []).forEach(functionName => {
  content = `# ${functionName}\n\n<Prototype></Prototype>\n`
  fs.writeFileSync(`../functions/${functionName.replace(/_/g, "-")}.md`, content)
})

