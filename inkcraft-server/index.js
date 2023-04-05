const express = require("express");
const app = express();

const User = require("./models/Users");
const dotenv = require("dotenv").config();
const initDB  = require('./database/db-initiate');
const routes = require('./routers/index');
const {errorHandler} = require("./middlewares/error-handler")
const cors = require("cors");

initDB()

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.use('/api/auth', routes.authRoute)
app.use('/api/writter',routes.writterRoute )
app.use(errorHandler)


const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`server is running at PORT ${PORT}`);
  });