const mongoose = require ('mongoose')

var promise = mongoose.connect('mongodb://localhost/stack-me', {useMongoClient: true})

mongoose.Promise = Promise
module.exports = mongoose