var forever = require('forever-monitor');
const git = require('simple-git')
const firebase = require('firebase')
const config = require('./config')

firebase.initializeApp(config)
var ref = firebase.database().ref().child("servers")
ref.child(config.device).on('value', autoPull)

// process.on('SIGINT', function() {
//   process.exit()
// });

// var child = new (forever.Monitor)('index.js', {
//   // max: 3,
//   silent: true,
//   args: []
// });

var child = new (forever.Monitor)('index.js');

child.on('watch:restart', function(info) {
    console.error('Restaring script because ' + info.file + ' changed');
});

child.on('restart', function() {
    console.error('Forever restarting script for ' + child.times + ' time');
});

child.start()

var running = false

// setInterval(function() {
//   if (running == true) return false;
//   running = true
//   autoPull()
// }, config.interval || 30000) // 30000

function autoPull (data) {
  // require('child_process').exec(`npm run start`)
  // console.log(data.val())
  git()
    .exec(function() {
      console.log('Starting pull ...')
    })
    .pull(function(err, update) {
      if(update && update.summary.changes) {
        console.log(update)
        console.log('processing and restarting app ...')
        child.restart()
      }
    })
    .exec(function() {
      console.log('pull done.')
      running = false
    })
}
