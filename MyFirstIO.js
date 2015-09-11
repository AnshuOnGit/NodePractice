var fr = require('fs')
var fileBuff = fr.readFileSync(process.argv[2])
var fileContent = fileBuff.toString()
console.log(fileContent.split('\n').length - 1)
