var http = require('http')
httpServer = http.createServer(function(req,res){
  var fr = require('fs')
  fileStream = fr.createReadStream(process.argv[3])
  fileStream.pipe(res)
})

httpServer.listen(process.argv[2])
