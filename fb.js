const firebase = require('firebase')
const dotenv = require('dotenv')

dotenv()

const config = {
    apiKey: process.env.APIKEY,
    authDomain: process.env.AUTHDOMAIN,
    databaseURL: process.env.DATABASEURL
}

firebase.initializeApp(config)

module.exports = firebase.database().ref()