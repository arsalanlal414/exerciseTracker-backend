const express = require('express');
const connectDb = require('./config/dbConnection');
const errorHandler = require('./middleWare/errorHandler');
const dotenv = require("dotenv").config();
const app = express();
const contactRoute = require("./routes/ContactRoutes")
const usersRoute = require("./routes/usersRoutes")

connectDb();

app.use(express.json())
app.use("/api/contacts", contactRoute);
app.use("/api/users",usersRoute);
app.use(errorHandler)


const port = process.env.PORT || 5000;

app.listen(port, ()=> {
    console.log(`server listening on port ${port}`)
});

