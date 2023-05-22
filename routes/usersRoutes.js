const express = require("express")
const router = express.Router()

const { registerUser, loginUser, CurrentUser } = require("../controllers/userControllers")
const validateToken = require("../middleWare/validateTokenHandler")

router.post("/register",registerUser )

router.post("/login", loginUser)

router.get("/current", validateToken, CurrentUser)

module.exports = router