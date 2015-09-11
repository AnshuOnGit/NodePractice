var mymodule = require('./excercise6.js')

function printFilesWithExtn(err,file_list){
  if(err == null){
  var path = require('path')
  file_list.forEach(function (file,index){
    console.log(file)
  })
  }
 else
   console.log(err)
}

var inputDirname = process.argv[2]
var inputExtName = process.argv[3]

mymodule(inputDirname,inputExtName,printFilesWithExtn)
