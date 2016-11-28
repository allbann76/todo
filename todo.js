var express = require('express');
var app = express();

app.get('/',function (req,resp) {
	resp.send('test OK!');
});

app.listen(3000,function(err) {
	if(err)throw err;
	console.log('server listen on port 3000');
});