const fb = require('./fb')

var ref = fb.child("servers")

ref.child(process.env.DEVICE).set(new Date().getTime())

ref.once('value', function (snapshot) {
    process.exit()
})