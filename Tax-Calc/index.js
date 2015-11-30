//Node Server for tax-calc using frpjs

var express = require('express'),
	app = express(),
	http = require('http').Server(app),
	frp = require('frpjs')

app.use(express.static('public'))

frp.io.connectToServer(http)

var connectionEvent = frp.io.on('connection'),
	connectionToSockEvent = socket => frp.socket.on(socket,'tax result')
	msgEvent = frp.bind(connectionEvent, connectionToSockEvent)

msgEvent(msg => frp.io.emit('tax result',msg))

http.listen(3010, function(){
	console.log('listening on port #: 3010')
})