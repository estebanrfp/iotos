const git = require('simple-git')
const fb = require('./fb')

var ref = fb.child("servers")

ref.child(process.env.DEVICE).on('value', autoPull)

// process.on('SIGINT', function() {
//   process.exit()
// });

var running = false

// setInterval(function() {
//   if (running == true) return false
//   running = true
//   autoPull()
// }, config.interval || 30000) // 30000

function autoPull (data) {
  // console.log(data.val())
  git()
    .exec(function() {
      console.log('Starting pull ...')
    })
    .pull(function(err, update) {
      if(update && update.summary.changes) {
        // console.log(update)
        console.log('processing and restarting app ...')
      }
    })
    .exec(function() {
      console.log('pull done.')
      running = false
    })
}
