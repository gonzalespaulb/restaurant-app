const express = require("express");
const router = express.Router();
const { registerUser, loginUser } = require("../controllers/userController.js");
const { protect } = require("../middlewares/authMiddleware");

router.post("/newUser", protect, registerUser);
router.post("/login", protect, loginUser);

module.exports = router;
