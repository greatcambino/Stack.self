const express       = require('express')
const QuestionDb    = require('../db/models/schema').QuestionDb
const router        = express.Router()



// Get all questions 
function getAll (req, res) {
    QuestionDb
    .find({})
    .then((questions) => {
            res.render('question-index', { questions: questions })
        })
}

// Get one question
function getOneQuestion (req, res) {
    // let id = req.params._id
    QuestionDb
    .findOne({ _id: req.params._id })
    .then(question => {
            res.render('question-show', { question: question })
        })
}

// Post a new question
function post (req, res) {
    console.log(req.body)
    QuestionDb
    .create(req.body)
    .then(question => {
        // res.redirect(`/create/${question.content}`)
        res.redirect('/question')
    })
}

// Delete a question
function Delete (req, res) {
    QuestionDb
    .findOneAndRemove({ _id: request.params._id })
    .then (() => {
        res.redirect('/question-show')
    })

}


module.exports = {
    router, 
    getAll: getAll, 
    getOneQuestion: getOneQuestion, 
    post: post,
    Delete, Delete
}