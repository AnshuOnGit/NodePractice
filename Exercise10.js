var date = new Date()
function pad(value, length) {
    return (value.toString().length < length) ? pad("0"+value, length):value;
}


year = date.getFullYear().toString()
month = pad((date.getMonth() + 1).toString(),2)
day = pad(date.getDate().toString(),2)
hours = pad(date.getHours().toString(),2)
minutes = pad(date.getMinutes().toString(),2)

to_be_printed =year + '-' +
               month + '-' +
               day + ' ' +
               hours + ':' +
               minutes + '\n'

var net = require('net')
var server = net.createServer(function(socket){
   socket.end(to_be_printed)
})
server.listen(process.argv[2])
