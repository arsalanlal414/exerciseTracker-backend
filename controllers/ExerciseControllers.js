const asyncHandler = require("express-async-handler") // it removes the try catch block and detects error by itself
const Exercise = require("../models/exerciseModel")

// @desc get all exercises
// @Route /api/contact
// @access private
const getExercises = asyncHandler( async (req, res) => {
    const exercise = await Exercise.find({user_id : req.user.id}).sort({createdAt:-1})
    res.status(200).json(exercise)
})

// @desc get a contact
// @Route /api/contact/:id
// @access private
const getExercise = asyncHandler(async (req, res)=>{
    const exercise = await Exercise.findById(req.params.id)
    if(!exercise){
        res.status(404);
        throw new Error("contact  not found")
    }
   
    res.status(200).json(exercise)
})

// @desc create a contact
// @Route /api/contact
// @access private
const createExercise = asyncHandler(async (req, res)=>{
    console.log("creating a user: ", req.body)
    const {name,
        desc,
        type,
        date,
        duration} = req.body
    if( !name,
        !desc,
        !type,
        !date,
        !duration){
        res.status(400)
        throw new Error("data not fount")
    }

    const exercise = await Exercise.create({
        name,
        desc,
        type,
        date,
        duration,
        user_id: req.user.id
    })
    res.status(200).json(exercise)
})

// @desc update a contact
// @Route /api/contact/:id 
// @access private
const updateExercise = asyncHandler(async (req, res)=>{
    const exercise = await Exercise.findById(req.params.id)
    if(!exercise){
        res.status(404);
        throw new Error("exercise  not found")
    }

    if(exercise.user_id.toString() !== req.user.id){
        res.status(403)
        throw new Error("You don't have permission to update")
    };

    const newExercise = await Exercise.findByIdAndUpdate(req.params.id, req.body,{
        new: true
    })
    res.status(200).json(newExercise)
})

// @desc delete a exercise
// @Route /api/exercise/:id
// @access private
const deleteExercise = asyncHandler(async (req, res)=>{
    const exercise = await Exercise.findById(req.params.id)
    
    if(!exercise){
        console.log("inside not statement")
        res.status(404);
        throw new Error("exercise  not found")
    }
    if(exercise.user_id.toString() !== req.user.id){
        res.status(403)
        throw new Error("You don't have permission to delete")
    }

    const result  = await Exercise.deleteOne({ _id: req.params.id })
    res.status(200).json(exercise)
})

// exporting the controlls
module.exports = {getExercises, getExercise, createExercise, updateExercise, deleteExercise}