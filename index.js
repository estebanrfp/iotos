const firebase = require('firebase')
const config = require('./config')

firebase.initializeApp(config);

var ref = firebase.database().ref().child("room1")
var Gpio = require('onoff').Gpio;
var led = new Gpio(17, 'out');

ref.on('value', function (data) {
    if (data.val().Light == "1") {
        console.log('on :-) -)))')
        led.writeSync(1);
        led.writeSync(0);
        led.writeSync(1);
        led.writeSync(0);
        led.writeSync(1);
    } else {
        console.log('off')
        led.writeSync(0);
    }
})
