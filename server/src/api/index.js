const express = require("express");
const router = new express.Router();
const articles = require("./articles");

// Mount Article api
router.use("/articles", articles);

module.exports = router;
