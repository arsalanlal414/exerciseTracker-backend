const express = require('express');
const app = express();
const connectDb = require('./config/dbConnection');
const errorHandler = require('./middleWare/errorHandler');
const dotenv = require("dotenv").config();
const exerciseRoute = require("./routes/ExerciseRoutes");
const usersRoute = require("./routes/usersRoutes");
const cors = require('cors');

connectDb();

// Middlewares
app.use(cors());
app.use(express.json());

// Application Routes
app.use("/api/exercise", exerciseRoute);
app.use("/api/users",usersRoute);
app.use(errorHandler);


// Connection Ports
const port = process.env.PORT || 5000;

// Listening to server
app.listen(port, ()=> {
    console.log(`server listening on port ${port}`);
});

