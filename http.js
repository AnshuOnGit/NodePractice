var inputUrl = process.argv[2]
var http = require('http')

http.get(inputUrl, function (res) {
  res.setEncoding('utf8')
  res.on('data', function (data){
    console.log(data)
  } )
  res.on('error', function(error){
    console.log(error)
  })
}).on('error', function(e) {
  console.log("Got error: " + e.message);
})
