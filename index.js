const fb = require('./fb')
const Gpio = require('onoff').Gpio

light("room1", 17)

function light (room, gpio) {

  let led = new Gpio(gpio, 'out')

  fb.child(room).on('value', function (data) {
    if (data.val().Light == "1") {
      // led.writeSync(1)
      // var iv = setInterval(function(){
      //     led.writeSync(led.readSync() === 0 ? 1 : 0)
      // }, 800)
      var iv = setInterval(function(){
          led.writeSync(led.readSync() === 0 ? 1 : 0)
      }, 100)
      console.log('led on')
    } else {
      led.writeSync(0)
      console.log('led off')
    }
  })
}