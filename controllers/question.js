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

// Get all topics 
function getAllTopics (req, res) {
    QuestionDb
    .find({})
    .then((questions) => {
            res.render('topics-index', { questions: questions })
        })
}

// Get a question
function getOneQuestion (req, res) {
    QuestionDb
    .findById({ _id: req.params._id })
    .then((question) => {
        res.render('question-show', { question: question })
    })
}

// Update a question
function Put (req, res) {
    QuestionDb
    .findOneAndUpdate({ _id: req.params._id }, req.body.question, {new: true})
    .then((question) => {
        res.render('question-show', { question: question })
    })
}

// Post a new question
function post (req, res) {
    console.log(req.body)
    QuestionDb
    .create(req.body.question)
    .then(question => {
        res.redirect('/question')
    })
}

// Delete a question
function Delete (req, res) {
    QuestionDb
    .findOneAndRemove({ _id: req.params._id })
    .then (() => {
        res.redirect('/question')
    })
}


module.exports = {
    router, 
    getAll: getAll, 
    getAllTopics: getAllTopics,
    getOneQuestion: getOneQuestion, 
    post: post,
    Delete: Delete,
    Put: Put
}