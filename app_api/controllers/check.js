var ocr = require("../../server/ocr");



var sendJsonResponse = function(res, status, content) {
    res.status(status);
    res.json(content);
};

module.exports.checkImage = function(req, res){
    ocr.checkCameraImage(function(err, number){
      if (err){
        sendJsonResponse(res, 500, "sorry");
      }else {
        
        sendJsonResponse(res, 200, number);
      }
    });
    console.log("checking");
};


