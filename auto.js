// var cron = require('node-cron');
const git = require('simple-git');
const firebase = require('firebase')
const config = require('./config')

// const path = __dirname + '/iotos';
// git(path).then etc..

firebase.initializeApp(config);

var ref = firebase.database().ref().child("servers")

ref.on('value', function (data) {
	if (data.val(config.device) == "pull") {
		deploy();
	} else {
		console.log('normal')
	}
})

function deploy () {
  console.log('Starting Deploying aplication ... :-)');
  // git(path).pull('origin', 'master')
	git()
	.then(function() {
		console.log('Starting pull ...');
	})
	.pull(function(err, update) {
		if(update && update.summary.changes) {
			console.log('processing and restarting app...');
			require('child_process').exec('npm restart app');
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