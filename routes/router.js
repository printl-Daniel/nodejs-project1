const express = require("express");
const router = express.Router();
const con = require("../controller/main");

router.get("/", con.main);
router.get("/about", con.about);
router.get("/news", con.news);
router.get("/credentials", con.credentials);
router.get("/contact", con.contact);

module.exports = router;
