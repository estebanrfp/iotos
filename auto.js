const git = require('simple-git');
const firebase = require('firebase')
const config = require('./config')

// const path = __dirname + '/iotos';
// git(path).then etc..

firebase.initializeApp(config);

var ref = firebase.database().ref().child("servers")

ref.child(config.device).on('value', deploy)

// ref.child(config.device).on('value', function (data) {
// 	//console.log(data.val())
// 	deploy();
// })

function deploy () {
  console.log('Starting Deploying aplication ...');

	git()
	.then(function() {
		console.log('Starting pull ...');
	})
	.pull(function(err, update) {
		if(update && update.summary.changes) {
			console.log('processing and restarting app...');
		}
	})
	.then(function() {
	console.log('pull done.');
	});
}