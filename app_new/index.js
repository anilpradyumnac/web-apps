var express = require('express'),app = express();http = require('http').Server(app),frp = require('frpjs')

app.use(express.static('public'))

frp.io.connectToServer(http)


http.listen(3000, function(){
  console.log('listening on *:3000')
})