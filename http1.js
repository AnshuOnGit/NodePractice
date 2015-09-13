var inputUrl = process.argv[2]
var http = require('http')


http.get(inputUrl, function (response){
  var concatStream = require('concat-stream')
  response.setEncoding('utf8')
  response.pipe(concatStream(function (data){
    console.log(data.toString().length)
    console.log(data.toString());
  }))
}).on('error', function (err){
  console.log('GOT ERROR:' +  err)
})
