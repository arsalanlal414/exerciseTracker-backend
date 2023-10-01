const  express = require("express");
const router = express.Router()
const {getExercises, getExercise, createExercise, updateExercise, deleteExercise} = require("../controllers/ExerciseControllers");
const validateToken = require("../middleWare/validateTokenHandler");

router.use(validateToken)
router.route("/").get(getExercises).post(createExercise)

router.route("/:id").get( getExercise).put(updateExercise).delete(deleteExercise)

module.exports = router