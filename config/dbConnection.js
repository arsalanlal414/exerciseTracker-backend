const mongoose = require("mongoose")
const connectDb = async () =>{
    try {
        const connect = await mongoose.connect(process.env.CONNECTION_STRING);
        console.log("DATABASE CONNECTED: lets play... ", connect.connection.host, connect.connection.name)
    } catch (err) {
        console.log("connection failed");
        process.exit(1)
    }
}

module.exports = connectDb;