const git = require('simple-git');
const firebase = require('firebase')
const config = require('./config')

firebase.initializeApp(config);

var ref = firebase.database().ref().child("servers")

ref.child(config.device).on('value', deploy)

process.on('SIGINT', function() {
	console.log('restarting in 2 seg ...')
	setTimeout(function(){
		process.exit();
	}, 100);
});

function deploy (data) {
	// console.log(data.val())
  	// require('child_process').exec(`docker build -t estebanrfp/iotos:latest https://github.com/estebanrfp/iotos.git`)
	// require('child_process').exec(`docker run --privileged -e DEVICE='${config.device}' -e APIKEY='${config.apiKey}' -e AUTHDOMAIN='${config.authDomain}' -e DATABASEURL='${config.databaseURL}' estebanrfp/iotos`);
	git()
	.then(function() {
		console.log('Starting pull ... ');
	})
	.pull(function(err, update) {
		if(update && update.summary.changes) {
			console.log('processing and restarting app ...');
		}
	})
	.then(function() {
		console.log('pull done.');
	});
}
