const express = require("express")
const router = express.Router()

const { registerUser, loginUser, CurrentUser } = require("../controllers/userControllers")

router.post("/register",registerUser )

router.post("/login", loginUser)

router.get("/current", CurrentUser)

module.exports = router