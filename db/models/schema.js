const mongoose    = require('../connection')

const QuestionSchema = new mongoose.Schema ({
    username: String,
    content: String, 
    topic: String, 
    upvotes: Number // adding upvote functionality in next version!
})


const QuestionDb = mongoose.model('QuestionDb', QuestionSchema)

module.exports = {mongoose, QuestionDb}