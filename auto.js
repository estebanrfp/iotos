var cron = require('node-cron');
const git = require('simple-git');
// const firebase = require('firebase');
// const path = __dirname + '/iotos';
// git(path).then etc..


var task = cron.schedule('*/1 * * * *', function() {
  console.log('running a task every minute');
  // git(path).pull('origin', 'master')
	git()
	.then(function() {
		console.log('Starting pull :-) ...');
	})
	.pull(function(err, update) {
		if(update && update.summary.changes) {
			task.stop();
			console.log('processing and restarting app...');
			require('child_process').exec('npm restart');
		}
		})
	.then(function() {
	console.log('pull done.');
	});
});
