const express = require("express");
const router = express.Router();

const { getWords } = require("../controller/words");
router.route("/").get(getWords);

module.exports = router;
