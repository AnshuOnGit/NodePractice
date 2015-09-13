var http = require('http')
httpServer = http.createServer(function(req,res){
  if (req.method != 'POST')
       return res.end('send me a POST\n')
  var map = require('through2-map')
  req.pipe(map (function(chunk){
    return chunk.toString().toUpperCase().split(' ').join(' ')
  })).pipe(res)

})

httpServer.listen(process.argv[2])
