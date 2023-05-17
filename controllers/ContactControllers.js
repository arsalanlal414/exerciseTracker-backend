
const asyncHandler = require("express-async-handler") // it removes the try catch block and detects error by itself

const getContacts = asyncHandler( async (req, res) => {
    res.status(200).json({messege: "Get all contacts from controller"})
})

const getContact = asyncHandler(async (req, res)=>{
    res.status(200).json({messege: `get a contact for ${req.params.id}`})
})

const createContacts = asyncHandler(async (req, res)=>{
    console.log("creating a user: ", req.body)
    const {email, name, phone} = req.body
    if(!name){
        res.status(400)
        throw new Error("data not fount")
    }
    res.status(201).json({messege: "post a contact"})
})

const updateContact = asyncHandler(async (req, res)=>{
    res.status(200).json({messege: `Update a contact for ${req.params.id}`})
})

const deleteContact = asyncHandler(async (req, res)=>{
    res.status(200).json({messege: `Delete a contact for ${req.params.id}`})
})

module.exports = {getContacts, getContact, createContacts, updateContact, deleteContact}