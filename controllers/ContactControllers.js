const asyncHandler = require("express-async-handler") // it removes the try catch block and detects error by itself
const Contact = require("../models/contactModel")

// @desc get all contacts
// @Route /api/contact
// @access private
const getContacts = asyncHandler( async (req, res) => {
    const contacts = await Contact.find({user_id : req.user.id})
    res.status(200).json(contacts)
})

// @desc get a contact
// @Route /api/contact/:id
// @access private
const getContact = asyncHandler(async (req, res)=>{
    const contact = await Contact.findById(req.params.id)
    if(!contact){
        res.status(404);
        throw new Error("contact  not found")
    }
    res.status(200).json(contact)
})

// @desc create a contact
// @Route /api/contact
// @access private
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
        phone,
        user_id: req.user.id
    })
    res.status(201).json(contact)
})

// @desc update a contact
// @Route /api/contact/:id 
// @access private
const updateContact = asyncHandler(async (req, res)=>{
    const contact = await Contact.findById(req.params.id)
    if(!contact){
        console.log("inside not statement")
        res.status(404);
        throw new Error("contact  not found")
    }

    if(contact.user_id.toString() !== req.user.id){
        res.status(403)
        throw new Error("You don't have permission to update")
    }

    const updatedContact = await Contact.findByIdAndUpdate(req.params.id, req.body,{
        new: true
    })
    res.status(200).json(updatedContact)
})

// @desc delete a contact
// @Route /api/contact/:id
// @access private
const deleteContact = asyncHandler(async (req, res)=>{
    const contact = await Contact.findById(req.params.id)
    
    if(!contact){
        console.log("inside not statement")
        res.status(404);
        throw new Error("contact  not found")
    }
    if(contact.user_id.toString() !== req.user.id){
        res.status(403)
        throw new Error("You don't have permission to delete")
    }

    const result  = await Contact.deleteOne({ _id: req.params.id })
    res.status(200).json(contact)
})

// exporting the controlls
module.exports = {getContacts, getContact, createContacts, updateContact, deleteContact}