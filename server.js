const express = require('express')

//in-memory DB
const inMemoryUserDB = require("./db/repository/inMemoryUserDB");
const db1 = new inMemoryUserDB();

//mongoDB
const connect = require("./db/mongodb/mongo");
// connect(); monogoCB connection
const mongodbUser = require("./db/repository/mongodbUser");
const db2 = new mongodbUser();

//express setup
const app = express();
app.use(express.json());

//keycloak setup
const initKeycloak = require("./services/keycloak");
const keycloak = initKeycloak(app);

//Routes localhost:3000/api/
const UserRouter = require("./routes/UserRoutes")

app.use("/api", /*keycloak.protect(),*/ UserRouter(db1))

app.listen(3000, () => {
  console.log('Server is running on port:3000');
});
