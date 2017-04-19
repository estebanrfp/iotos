// var cron = require('node-cron');
const git = require('simple-git');
const firebase = require('firebase')
const config = require('./config')
const cprocess = require('child_process')
// const path = __dirname + '/iotos';
// git(path).then etc..

firebase.initializeApp(config);

var ref = firebase.database().ref().child("servers")

// cprocess.exec('npm run app');

ref.on('value', function (data) {
	if (data.val().rpi1 == "pull") {
		deploy();
	} else {
		console.log('normal')
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

// var task = cron.schedule('*/1 * * * *', function() {
//   console.log('running a task every minute');
//   deploy ()
//   // task.stop();
// });