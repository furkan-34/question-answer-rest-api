const express = require("express");
const dotenv = require('dotenv');
const routers = require('./routers'); //index.js for routers
const connectDatabase = require('./helpers/database/connectDatabase');
const customErrorHandler = require('./middlewares/errors/customErrorHandler');
const cors = require('cors');
const path = require('path');
const bodyParser = require("body-parser");



// Enviroment Variables
dotenv.config({
    path: "./config/env/config.env"
});

// MongoDB Connection
connectDatabase();


const app = express();
const PORT = process.env.NODE_ENV === "development" ? 5000 : process.env.port;
//Express Body Middleware
app.use(express.json());
// cors
app.use(cors());

// Routers Middleware, routing to routers index js for all endpoints
app.use("/api",routers);

//error handling
app.use(customErrorHandler);

//static files
app.use(express.static(path.join(__dirname, "public")));


app.listen(PORT, () => {
    console.log(`App Started on ${PORT} : ${process.env.NODE_ENV}`);
})

app.use(bodyParser.json({limit:'5mb'})); 
app.use(bodyParser.urlencoded({extended:true, limit:'5mb'}));

module.exports = app;