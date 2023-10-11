const express = require('express')
const UserRouter = require("./routes/UserRoutes")

//in-memory DB
const inMemoryUserDB = require("./db/repository/inMemoryUserDB");
const db1 = new inMemoryUserDB();

//mongoDB
const connect = require("./db/mongodb/mongo");
connect();
const mongodbUser = require("./db/repository/mongodbUser");
const db2 = new mongodbUser();

const app = express();
app.use(express.json());

app.use("/api", UserRouter(db1))

app.listen(3000, () => {
  console.log('Server is running on port:3000');
});