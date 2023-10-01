const mongoose = require("mongoose");

const exerciseModel = mongoose.Schema({
    user_id:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User"
    },
    name: {
        type: String,
        required: [true, "please add the exercise name"]
    },
    desc: {
        type: String,
        required: [true, "please add the exercise name"]
    },
    type: {
        type: String,
        required: [true, "please add the exercise type"]
    },
    date: {
        type: String,
        required: [true, "please add the exercise date"]
    },
    duration:{
        type: String,
        require: [true, "please provide the duration"]
    }
    
},{
    timestamps: true,
})

module.exports = mongoose.model("exercise", exerciseModel);