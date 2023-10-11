const express = require('express')
const UserRouter = require("./routes/UserRoutes")

const inMemoryUserDB = require("./db/inMemoryUserDB");
const db = new inMemoryUserDB();


const app = express();
app.use(express.json());

app.use("/api", UserRouter(db))

app.listen(3000, () => {
  console.log('Server is running on port:3000');
});