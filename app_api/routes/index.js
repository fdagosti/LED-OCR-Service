var express = require("express");
var router = express.Router();

var checkCtrl = require("../controllers/check");

// hello
router.get("/hello", function(req, res){
  res.status(200),
  res.json({result:"fine"});
});

router.post("/check", checkCtrl.checkImage);

router.get("/status", function(req, res){
  res.status(200);
  res.json({number: 45});
});

module.exports = router;