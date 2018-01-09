var express         = require('express')
var router          = express.Router()
var parser          = require('body-parser')
var usersController = require('../controllers/question')


router.route('/')
    .get(usersController.getAll)

router.route('/:_id')
    .get(usersController.getOneQuestion)

router.route('/')
    .post(usersController.post)

router.route('/')
    .delete(usersController.Delete)

module.exports = router