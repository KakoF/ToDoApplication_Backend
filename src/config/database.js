const mongoose = require('mongoose')
mongoose.Promise = global.Promise

module.exports = mongoose.connect('mongodb://localhost/todo')
//module.exports = mongoose.connect('mongodb://Kako:fcm020964@localhost/todo')