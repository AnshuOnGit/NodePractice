var http = require('http')
httpServer = http.createServer(function(req,res){
  if (req.method != 'GET')
       return res.end('send me a GET\n')
  var url = require('url')
  urlObj = url.parse(req.url,true)
  timeStamp = urlObj.query['iso']
  dateObj = new Date(timeStamp)
  realObj = new Object()
  if(urlObj.path.toString().indexOf('/api/parsetime') > -1){
    realObj.hour = dateObj.getHours()
    realObj.minute = dateObj.getMinutes()
    realObj.second = dateObj.getSeconds()
  }
  else if (urlObj.path.toString().indexOf('/api/unixtime') > -1)
    realObj.unixtime = dateObj.getTime() 
  var dateAsJson = JSON.stringify(realObj)
  res.writeHead(200, { 'Content-Type': 'application/json' })
  res.write(dateAsJson)
  res.end()
})

httpServer.listen(process.argv[2])
