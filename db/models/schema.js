const mongoose    = require('../connection')

const QuestionSchema = new mongoose.Schema ({
    username: String,
    content: String, 
    topic: String, 
    upvotes: Number
})


const QuestionDb = mongoose.model('QuestionDb', QuestionSchema)

module.exports = {mongoose, QuestionDb}