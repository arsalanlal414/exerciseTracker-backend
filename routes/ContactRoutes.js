const  express = require("express");
const router = express.Router()
const {getContacts, getContact, createContacts, updateContact, deleteContact} = require("../controllers/ContactControllers");
const validateToken = require("../middleWare/validateTokenHandler");

router.use(validateToken)
router.route("/").get(getContacts).post(createContacts)

router.route("/:id").get( getContact).put(updateContact).delete(deleteContact)

// lengthy way of routing
// router.route("/").get(getContacts)

// router.route("/:id").get( getContact)

// router.route("/").post(createContacts)
 
// router.route("/:id").put(updateContact)

// router.route("/:id").delete(deleteContact)

module.exports = router