const git = require('simple-git');
const firebase = require('firebase')
const config = require('./config')
// const cprocess = require('child_process')
// const path = __dirname + '/iotos';
// git(path).then etc..

firebase.initializeApp(config);

var ref = firebase.database().ref().child("servers")

// cprocess.exec('npm run app');


// ref.child(config.device)

ref.on('value', function (data) {
	if (data.val()[0] == config.device) {
		deploy();
	} else {
		console.log('no es el dispositivo');
	}
})

function deploy () {
  console.log('Starting Deploying aplication :-)');
  // git(path).pull('origin', 'master')
	git()
	.then(function() {
		console.log('Starting pull ... :-)))');
	})
	.pull(function(err, update) {
		if(update && update.summary.changes) {
			console.log('processing and restarting app...');
			// cprocess.exec('npm stop app');
		}
	})
	.then(function() {
	console.log('pull done.');
	});
}