const express = require('express')

// in-memory DB
const InMemoryUserDB = require('./db/repository/inMemoryUserDB')
const db1 = new InMemoryUserDB()

// mongoDB
// const MongoConnect = require('./db/mongodb/mongo')
// MongoConnect(); monogoCB connection
// const MongodbUser = require('./db/repository/mongodbUser')
// const db2 = new MongodbUser()

// express setup
const app = express()
app.use(express.json())

// keycloak setup
// const initKeycloak = require('./services/keycloak')
// const keycloak = initKeycloak(app)

// Routes localhost:3000/api/
const UserRouter = require('./routes/UserRoutes')

app.use('/api', /* keycloak.protect(), */ UserRouter(db1))

app.listen(3000, () => {
  console.log('Server is running on port:3000')
})
