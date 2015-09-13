var responseArrays = ['first','second','third']
var count = 0
function solveTheProblem(input1,input2,input3,responseArrays,callback){
var http = require('http')


http.get(input1, function(response){
  response.setEncoding('utf8')
  var concatStream = require('concat-stream')
  response.pipe(concatStream(function(data){
    responseArrays[0] = data.toString()
    count += 1
    callback(responseArrays)
  }))
})

http.get(input2, function(response){
  response.setEncoding('utf8')
  var concatStream = require('concat-stream')
  response.pipe(concatStream(function(data){
    responseArrays[1] = data.toString()
    count += 1
    callback(responseArrays)
  }))
})

http.get(input3, function(response){
  response.setEncoding('utf8')
  var concatStream = require('concat-stream')
  response.pipe(concatStream(function(data){
    responseArrays[2] = data.toString()
      count += 1
      callback(responseArrays)
  }))
})
}

function checkAndPrint(responseArrays){
  if(count == 3)
    for(var i =0 ; i< responseArrays.length; i++)
      console.log(responseArrays[i])
}

solveTheProblem(process.argv[2],process.argv[3],process.argv[4],responseArrays,checkAndPrint)
