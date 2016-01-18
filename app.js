var express = require('express')
  , path = require('path')
  , app = express() // Web framework to handle routing requests
  , cons = require('consolidate') // Templating library adapter for Express
  , routes = require('./routes'); // Routes for our application
    "use strict";
   // Register our templating engine
    app.engine('html', cons.swig);
    app.set('view engine', 'html');
    app.set('views', __dirname + '/views');
	app.use(express.static(path.join(__dirname, 'public')));

    // Express middleware to populate 'req.cookies' so we can access cookies
    app.use(express.cookieParser());

    // Express middleware to populate 'req.body' so we can access POST variables
    app.use(express.bodyParser());

    // Application routes
    routes(app);
    app.listen(8084);
    console.log('Express server listening on port 8084');
