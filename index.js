const firebase = require('firebase')
const config = require('./config')

firebase.initializeApp(config);

var ref = firebase.database().ref().child("room1")
var Gpio = require('onoff').Gpio;
var led = new Gpio(17, 'out');

ref.on('value', function (data) {
    if (data.val().Light == "1") {
        console.log('on')
        led.writeSync(1);
        // var iv = setInterval(function(){
        //     led.writeSync(led.readSync() === 0 ? 1 : 0)
        // }, 500);
        // var iv = setInterval(function(){
        //     led.writeSync(led.readSync() === 0 ? 1 : 0)
        // }, 100);
    } else {
        console.log('off')
        led.writeSync(0);
    }
})
