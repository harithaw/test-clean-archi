const mongoose = require('mongoose')

const connect = () => {
  const uri = 'mongodb+srv://admin:admin123@test.8fdwymv.mongodb.net/?retryWrites=true&w=majority'

  mongoose.connect(uri, { useNewUrlParser: true })

  const db = mongoose.connection
  db.on('error', console.error.bind(console, 'connection error:'))
  db.once('open', () => {
    console.log('connected to MongoDB database!')
  })

  return mongoose
}

module.exports = connect
