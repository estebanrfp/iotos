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

var child = new (forever.Monitor)('index.js', {
  max: 3,
  silent: true,
  args: []
});

child.on('watch:restart', function(info) {
    console.error('Restaring script because ' + info.file + ' changed');
});

child.start();

var running = false

// setInterval(function() {
//   if (running == true) return false;
//   running = true
//   autoPull()
// }, config.interval || 30000) // 30000

function autoPull (data) {
  // require('child_process').exec(`npm run start`)
  // console.log(data.val())
  // require('child_process').exec(`docker build -t estebanrfp/iotos:latest https://github.com/estebanrfp/iotos.git`)
  // require('child_process').exec(`docker run --privileged -e DEVICE='${config.device}' -e APIKEY='${config.apiKey}' -e AUTHDOMAIN='${config.authDomain}' -e DATABASEURL='${config.databaseURL}' estebanrfp/iotos`);
  git()
    .exec(function() {
      console.log('Starting pull ...')
    })
    .pull(function(err, update) {
      if(update && update.summary.changes) {
        console.log(update)
        console.log('processing and restarting app ...')
      }
    })
    .exec(function() {
      console.log('pull done.')
      running = false
    })
}
