const mongoose    = require('../connection')

const QuestionSchema = new mongoose.Schema ({
    content: String, 
    topic: String, 
    upvotes: Number // upvote functionality coming soon!
})


const QuestionDb = mongoose.model('QuestionDb', QuestionSchema)

module.exports = {mongoose, QuestionDb}