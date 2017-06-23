var express = require('express')
var server = express()
server.use(express.static(__dirname + '/src'));

app.listen(3000, () => {
  console.log('listening on port', 3000)
})
