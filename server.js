const express = require('express');
var path = require('path');
var cors = require('cors')
var bodyParser = require('body-parser');

var app = express();
app.use(cors());

app.use(bodyParser.json());

app.use(express.static('dist'));

app.get('/', function (req, res) {
    res.sendFile(path.resolve('./dist/index.html'));
});


const PORT = process.env.PORT || 8080;

app.listen(PORT, function(error) {
  if (error) throw error;
  console.log("Express server listening on port " + PORT);
});
