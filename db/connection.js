const mongoose = require ('mongoose')

mongoose.Promise = Promise

mongoose.connect('mongodb://localhost/stack-me', {useMongoClient: true})

module.exports = mongoose