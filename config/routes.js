var express         = require('express')
var router          = express.Router()
var parser          = require('body-parser')
var usersController = require('../controllers/question')


router.route('/')
    .get(usersController.getAll)

router.route('question/content')
    .get(usersController.getOneQuestion)

module.exports = router