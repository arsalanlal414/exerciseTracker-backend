const express = require('express');
const app = express();
const connectDb = require('./config/dbConnection');
const errorHandler = require('./middleWare/errorHandler');
const dotenv = require("dotenv").config();
const exerciseRoute = require("./routes/ExerciseRoutes");
const usersRoute = require("./routes/usersRoutes");
const cors = require('cors');

connectDb();

app.use(cors());
app.use(express.json());
app.use("/api/exercise", exerciseRoute);
app.use("/api/users",usersRoute);
app.use(errorHandler);

const port = process.env.PORT || 5000;

app.listen(port, ()=> {
    console.log(`server listening on port ${port}`);
});

