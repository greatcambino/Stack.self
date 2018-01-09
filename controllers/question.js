const express       = require('express')
const QuestionDb    = require('../db/models/schema').QuestionDb
const router        = express.Router()



// Get all questions 
function getAll (req, res) {
    QuestionDb
    .find({})
    .then((questions) => {
            res.render('question-index', {
                questions: questions
            })
        })
}

// Get one question
function getOneQuestion (req, res) {
    let content = req.params.content
    QuestionDb.findOne({ content: content })
        .then(questions => {
            res.render('question-show', { question: question })
        })
}

router.post('/', (req, res) => {
    QuestionDb.create(req.body.questions)
    .then(question => {
        res.redirect(`/question/${question.content}`)
    })
})

router.put('/:content', (req, res) => {
    QuestionDb.findOneAndUpdate({ content: req.params.content }, req.body.question, { new: true })
    .then(question => {
        res.redirect(`/question/${question.content}`)
    })
})

module.exports = {
    router, 
    getAll: getAll, 
    getOneQuestion: getOneQuestion, 
}