const QuestionDb = require('./models/schema').QuestionDb
const seedData   = require('./seeds.json')

QuestionDb.remove({})
    .then(() => {
        QuestionDb.collection.insert(seedData)
    })
    .then(() => {
        process.exit()
    })