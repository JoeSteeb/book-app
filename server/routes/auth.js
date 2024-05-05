var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "auth" });
});

router.post("/register", function (req, res, next) {
  const { email, password } = req.body;
  console.log(`Email: ${email} \n Password: ${password}`);
});

router.post("/login", function (req, res, next) {
  console.log("hit login");
  console.log("request body = " + req.body);
  const { email, password } = req.body;
  console.log(`Email: ${email} \n Password: ${password}`);
});

router.get("/logout", function (req, res, next) {});

module.exports = router;
