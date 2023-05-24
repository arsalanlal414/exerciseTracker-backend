const  express = require("express");
const router = express.Router()
const {getExercises, getExercise, createExercise, updateExercise, deleteExercise} = require("../controllers/ExerciseControllers");
const validateToken = require("../middleWare/validateTokenHandler");

router.use(validateToken)
router.route("/").get(getExercises).post(createExercise)

router.route("/:id").get( getExercise).put(updateExercise).delete(deleteExercise)

// lengthy way of routing
// router.route("/").get(getContacts)

// router.route("/:id").get( getContact)

// router.route("/").post(createContacts)
 
// router.route("/:id").put(updateContact)

// router.route("/:id").delete(deleteContact)

module.exports = router