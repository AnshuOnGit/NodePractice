var inputFile = process.argv[2].toString()
var fr = require('fs')
var numberOfLinesinFile = undefined
function readTheFile(callback){
  fr.readFile(inputFile,function (err, fileContents){
    numberOfLinesinFile = fileContents.toString().split('\n').length -1
    if(! err){
        callback()
    }

  });
}

function printAtConsole(){
  console.log(numberOfLinesinFile);
}

readTheFile(printAtConsole)
