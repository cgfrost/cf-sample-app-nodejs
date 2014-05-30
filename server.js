/**
 * Created by cgfrost on 14/03/2014.
 */

/*jslint node: true */
"use strict";

var lessMiddleware = require('less-middleware');
var express = require('express');
var app = express();


// Configuration
app.set('views', __dirname + '/views');
app.set('view options', {layout: true});
app.set('view engine', 'jade');
app.use(lessMiddleware(__dirname + '/public'));
app.use(express.static(__dirname + '/public'));

require("./routes/controller.js")(app);

var port = process.env.PORT || 3000;

var webServer = app.listen(port, function () {
    console.log('Listening on port %d', webServer.address().port);
});
