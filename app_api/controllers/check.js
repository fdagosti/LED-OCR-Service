var ocr = require("../../server/ocr");



var sendJsonResponse = function(res, status, content) {
    res.status(status);
    res.json(content);
};

module.exports.checkImage = function(req, res){
    ocr.checkCameraImage(function(err, number){
      if (err){
        sendJsonResponse(res, 500, err.message);
      }else {
        
        sendJsonResponse(res, 200, number);
      }
    });
    console.log("checking");
};


