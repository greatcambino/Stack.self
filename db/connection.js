const mongoose = require ('mongoose')

mongoose.Promise = Promise

mongoose.connect('mongodb://localhost/stack-me', {useMongoClient: true})

if (process.env.NODE_ENV == "production") {
    mongoose.connect(process.env.MLAB_URL)
  } else {
    mongoose.connect("mongodb://localhost/whenpresident");
  }

module.exports = mongoose