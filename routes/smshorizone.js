var request = require('request');
//The url we want is: 
//http://smshorizon.co.in/api/sendsms.php?user=Girishsms&apikey=C2DXs6ypoguArEOo1Cnk&mobile=918087258048&message=test&senderid=MYTEXT&type=txt

//http://smshorizon.co.in/api/status.php?user=Girishsms&apikey=C2DXs6ypoguArEOo1Cnk&msgid=3855107
//3855103
//3820737
//3854989
// Replace with your username

exports.sendsms = function(req, res) {

var user = "XXXXXXX";

// Replace with your API KEY (We have sent API KEY on activation email, also available on panel)
var apikey = "XXXXXXXXXX";

// Replace with the destination mobile Number to which you want to send sms
var mobile = req.body.mobile;

// Replace if you have your own Sender ID, else donot change
var senderid = "MYTEXT";

// Replace with your Message content
var message = "Girish Test: Your order has been shipped. You will receive this order. Thanks for using our services.";

// For Plain Text, use "txt" ; for Unicode symbols or regional Languages like hindi/tamil/kannada use "uni"
var type="txt";

var mainUrl= 'http://smshorizon.co.in/api/sendsms.php?'+"user="+user + "&apikey="+apikey + "&mobile="+mobile + "&message="+message + "&senderid="+senderid + "&type="+type ;



request(mainUrl, function (error, response, body) {
  if (!error && response.statusCode == 200) {	
  
	var msgurl = "http://smshorizon.co.in/api/status.php?user=Girishsms&apikey=C2DXs6ypoguArEOo1Cnk&msgid=" + response.body;
	//console.log(msgurl)
		request(msgurl, function (error, response2, body) {
		if (!error && response2.statusCode == 200) {
		console.log(mainUrl);
		console.log(msgurl)	
		res.render('index',{sent_status:response2.body});
	
  }
})
  }
})
}
