const express = require('express');
const connectDb = require('./config/dbConnection');
const errorHandler = require('./middleWare/errorHandler');
const dotenv = require("dotenv").config();

connectDb();
const app = express();
const contactRoute = require("./routes/ContactRoutes")

const port = process.env.PORT || 5000;

app.use(express.json())
app.use("/api/contacts", contactRoute);
app.use(errorHandler)

app.listen(port, ()=> {
    console.log(`server listening on port ${port}`)
});

