const mongoose = require ('mongoose')

mongoose.Promise = Promise

if (process.env.NODE_ENV == "production") {
    mongoose.connect(process.env.MONGODB_URI)
  } else {
    mongoose.connect("mongodb://localhost/stack-self");
  }

module.exports = mongoose