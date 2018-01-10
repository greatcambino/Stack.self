var express         = require('express')
var router          = express.Router()
var parser          = require('body-parser')
var usersController = require('../controllers/question')

// sets path at '/' for question-index
router.route('/')
    .get(usersController.getAll)
    .post(usersController.post)

// /':_id' --> assigns unique value; redirects to a page with a path based on a user's Get request 
router.route('/:_id')
    .get(usersController.getOneQuestion)
    .delete(usersController.Delete)

router.route('/topics')
    .get(usersController.getAllTopics)

module.exports = router