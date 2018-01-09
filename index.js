var express            = require('express')
var mongoose           = require('mongoose')
var hbs                = require('express-handlebars')
var app                = express()
var parser             = require('body-parser')
const questions        = require('./config/routes')
const methodOverride   = require('method-override')

// mongoose.connect('mongodb://localhost/stack-me')


app.set('view engine', 'hbs')
app.set('views', './views')

// var routes = require('./config/routes')
// app.use(routes)

app.use(parser.urlencoded({extended: true}))
app.use(methodOverride('_method'))
app.use('/question', questions)
app.use('/assets', express.static('public'))

app.get('/', (req, res) => {
    res.render('welcome')
})

// app.listen(3000, () => {
//     console.log('app listening on port 3000')
// })

app.set('port', process.env.PORT || 3000)

app.listen(app.get('port'), () => {
  console.log(`✅ PORT: ${app.get('port')} 🌟`)
})