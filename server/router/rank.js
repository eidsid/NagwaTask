const express = require("express");
const router = express.Router();

const { getRank } = require("../controller/rank");

router.route("/").post(getRank);

module.exports = router;
