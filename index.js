const fb = require('./fb')
const Gpio = require('onoff').Gpio

var led = new Gpio(17, 'out')

fb.child("room1").on('value', function (data) {
    if (data.val().Light == "1") {
        console.log('led on :-) ahora si')
        // led.writeSync(1)
        // var iv = setInterval(function(){
        //     led.writeSync(led.readSync() === 0 ? 1 : 0)
        // }, 800)
        var iv = setInterval(function(){
            led.writeSync(led.readSync() === 0 ? 1 : 0)
        }, 100)
    } else {
        console.log('led off')
        led.writeSync(0)
    }
})
