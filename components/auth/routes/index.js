var { join } = require("path");
var express = require("express");
var router = express.Router();

const registerRouter = require("./register");
const loginRouter = require("./login");

router.use("/register", registerRouter);
router.use("/login", loginRouter);

module.exports = router;
