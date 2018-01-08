const QuestionDb = require('./models/schema').QuestionDb
const seedData   = require('./seeds.json')

QuestionDb.remove({})
    .then(() => {
        return QuestionDb.collection.insert(seedData)
    })
    .then(() => {
        process.exit()
    })