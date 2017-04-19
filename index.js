var firebase = require('firebase')

var config = {
    apiKey: process.env.APIKEY,
    authDomain: process.env.AUTHDOMAIN,
    databaseURL: process.env.DATABASEURL
};

firebase.initializeApp(config);

var ref = firebase.database().ref().child("room1")

var Gpio = require('onoff').Gpio;
var led = new Gpio(17, 'out');

ref.on('value', function (data) {
    if (data.val().Light == "1") {
        console.log('on')
        led.writeSync(1);
    } else {
        console.log('off')
        led.writeSync(0);
    }
})
