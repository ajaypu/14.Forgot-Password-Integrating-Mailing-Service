const express = require("express");

const router = express.Router();
const resetController = require("../controllers/password");

router.post("/forgotPassword", resetController.resetPassword);

module.exports = router;
