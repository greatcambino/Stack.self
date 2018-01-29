// I would call this file question
const mongoose    = require('../connection')

const QuestionSchema = new mongoose.Schema ({
    content: String, 
    topic: String, 
    upvotes: Number // upvote functionality coming soon!
})

// Question is a more convential name for the model, rather than QuestionDb. It's implied the model will communicate with the database.
// the model communicates to the db via the ODM (Object Document Mapper) library, Mongoose, which there an instance of here in teh variable `mongooose`.
const QuestionDb = mongoose.model('QuestionDb', QuestionSchema)

module.exports = {mongoose, QuestionDb}
// you can just export the model. as long as there is an open mongoose connection, your model will be a le to talk to the database

// You should add a response model as well
// Responses, for example, could a sub-document of
// Question. 

// Example from Yum HW:
// https://git.generalassemb.ly/ga-wdi-exercises/yum/tree/solution/db
