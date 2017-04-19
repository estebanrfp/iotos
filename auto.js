var cron = require('node-cron');
const git = require('simple-git');
const git = require('firebase');
const path = __dirname + '/iotos';

cron.schedule('*/1 * * * *', function(){
  console.log('running a task every minute');
  // git(path).pull('origin', 'master')
	git(path)
	.then(function() {
		console.log('Starting pull...');
	})
	.pull(function(err, update) {
		if(update && update.summary.changes) {
			console.log('processing and restarting app...');
			require('child_process').exec('npm restart');
		}
		})
	.then(function() {
	console.log('pull done.');
	});
});
