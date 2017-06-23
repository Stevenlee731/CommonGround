var express = require('express');
var app = express();
var path = require('path');

app.use(express.static('src'))

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/src'));
});

var server_port = process.env.YOUR_PORT || process.env.PORT || 80;
var server_host = process.env.YOUR_HOST || '0.0.0.0';
app.listen(server_port, server_host, function() {
    console.log('Listening on port %d', server_port);
});
