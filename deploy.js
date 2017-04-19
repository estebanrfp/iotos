const firebase = require('firebase')
const config = require('./config')

firebase.initializeApp(config);

var ref = firebase.database().ref().child("servers");

//ref.rpi1.set("pull");
ref.set({rpi1: "pull"});
