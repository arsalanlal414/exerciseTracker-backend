const asyncHandler = require("express-async-handler") // it removes the try catch block and detects error by itself
const User = require("../models/userModel")

const registerUser = asyncHandler( async (req, res)=>{
    const {username, email, password} = req.body;
    if(!username || !email || !password){
        res.status(400);
        throw new Error("all fields are mendatory")
    }

    const availableUser = await User.findOne({email});
    if(availableUser){
        res.status(400);
        throw new Error("email already exists")
    }

    const registerUser = await User.create({
        username, email, password
    })
    
    res.status(201).json(registerUser);
})

const loginUser = asyncHandler( async(req, res)=>{
    res.json({messege: "login user"})
})

const CurrentUser = asyncHandler( async(req, res)=>{
    res.json({messege: "current user"})
})


module.exports = {registerUser, loginUser, CurrentUser}