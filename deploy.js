const firebase = require('firebase')
const config = require('./config')

firebase.initializeApp(config);

var ref = firebase.database().ref().child("servers");

ref.child("rpi1").set("pull");
