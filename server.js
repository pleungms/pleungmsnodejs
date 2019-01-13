// ############################################################################
// File Name: server.js
// Description:
//  Simple node.js application using express listening to port 8080
// Author: Peter Leung (pleungms@hotmail.com)
// Modification history
//  Author         Date       Description
//  -------------- ---------- -------------------------------------------------
//  Peter Leung    13/01/2019 Initial version
//
// ############################################################################
var express = require('express');
var app = express();
var iPortNum = 8080;

// All routes
app.get('/', function (req, res) {
  console.log('http get...');
  res.send('Hello World!');
});

// Create the server listening for http requests
app.listen(iPortNum, function () {
  console.log('Example nodejs app listening on port ' + this.address().port);
});
