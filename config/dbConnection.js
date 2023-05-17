const mongoose = require("mongoose")
const connectDb = async () =>{
    try {
        const connect = await mongoose.connect(process.env.CONNECTION_STRING);
        console.log("DATABASE CONNECTED: lets play ")
    } catch (err) {
        console.log("connection failed");
        process.exit(1)
    }
}

module.exports = connectDb;