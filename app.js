var express = require('express');
var app = express();

app.use(express.static(__dirname));

// app.get('/index', function(req, res) {
//     res.sendfile('./docs/index.html');
// });

app.listen(3000);

