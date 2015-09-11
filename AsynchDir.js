var fr = require('fs')
var inputDirname = process.argv[2].toString()
var inputExtName = process.argv[3].toString()
function doAsIsay(printFiles){
fr.readdir(inputDirname,function(err,listOfFiles){
  if(!err)
    printFiles(listOfFiles)
})
}

function printFiles(listOfFiles){
  var path = require('path')
  for(var i =0; i< listOfFiles.length; i++)
  {
     if(path.extname(listOfFiles[i]) == '.' + inputExtName)
     console.log(listOfFiles[i])
  }
}

doAsIsay(printFiles)
