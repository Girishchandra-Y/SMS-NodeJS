var sendsms = require('./smshorizone');

module.exports = exports = function(app) {


    // The main page of the POC
    app.get('/', function(req, res, next) {
        "use strict";
   
            return res.render('index');
    });
	
	app.post('/', function(req, res, next) {
        "use strict";
   
            console.log(req.body.mobile);
			sendsms.sendsms(req,res);
    });
    
}
