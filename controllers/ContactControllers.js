
const asyncHandler = require("express-async-handler") // it removes the try catch block and detects error by itself
const Contact = require("../models/contactModel")

// get all contacts
const getContacts = asyncHandler( async (req, res) => {
    const contacts = await Contact.find()
    res.status(200).json(contacts)
})

// get a single contact
const getContact = asyncHandler(async (req, res)=>{
    const contact = await Contact.findById(req.params.id)
    if(!contact){
        res.status(404);
        throw new Error("contact  not found")
    }
    res.status(200).json(contact)
})

//create a new contact
const createContacts = asyncHandler(async (req, res)=>{
    console.log("creating a user: ", req.body)
    const {email, name, phone} = req.body
    if(!name || !email || !phone){
        res.status(400)
        throw new Error("data not fount")
    }

    const contact = await Contact.create({
        name,
        email,
        phone
    })
    res.status(201).json(contact)
})

// update a contact
const updateContact = asyncHandler(async (req, res)=>{
    const contact = await Contact.findById(req.params.id)
    if(!contact){
        console.log("inside not statement")
        res.status(404);
        throw new Error("contact  not found")
    }

    const updatedContact = await Contact.findByIdAndUpdate(req.params.id, req.body,{
        new: true
    })
    res.status(200).json(updatedContact)
})

// delete a contact
const deleteContact = asyncHandler(async (req, res)=>{
    // const contact = await Contact.findById(req.params.id)
    
    // if(!contact){
    //     console.log("inside not statement")
    //     res.status(404);
    //     throw new Error("contact  not found")
    // }

    const result  = await Contact.deleteOne({ _id: req.params.id })
    res.status(200).json(result)
})

// exporting the controlls
module.exports = {getContacts, getContact, createContacts, updateContact, deleteContact}