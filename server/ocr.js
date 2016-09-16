var path = require('path');
var AWS = require("aws-sdk");
var exec = require('child_process').exec;
var proc;


var s3 = new AWS.S3();
var S3Params = {
  Bucket: "led-ocr",
  Key: "LED.jpg"
};
var cv = require('opencv');

var ROI = {
  x: 135,
  y:220,
  width: 330,
  height:220
};



module.exports.checkCameraImage = function(cb){

  s3.getObject(S3Params, function(err, data){
    if (err){
      console.log(err, err.stack);
      cb(err, null);
    }else {
      // console.log(data);
      cv.readImage(data.Body, function(err, im) {
        if (err){
          cb(err, null);
          return;
        }

        var processedImage = im.roi(ROI.x, ROI.y, ROI.width, ROI.height);
        processedImage.convertGrayscale();
        processedImage = processedImage.threshold(45, 255, "Binary Inverted");

         var output_path = path.join(__dirname, 'img', 'led_output.png');
        processedImage.save(output_path);

        var cmd = "ssocr -d -1 crop 4 4 " + (ROI.width - 3) + " " + (ROI.height - 3) + " " + output_path;

        proc = exec(cmd, function(error, stdout, stderr) {
            if (stderr) {
              console.error(stderr);
            } else {
              if ((stdout.indexOf('_') == -1) && (stdout.indexOf('-') == -1)) {

                var val = parseInt(stdout);
                console.log("VALUE = "+val);
                cb(null, val);
              }
            }
          });


        // var w = new cv.NamedWindow('led-source', cv.CV_WINDOW_AUTOSIZE);
        // var procesedWindow = new cv.NamedWindow('processed Image', cv.CV_WINDOW_AUTOSIZE);
        // w.show(im);
        // procesedWindow.show(processedImage);
        // w.blockingWaitKey(0,5000);
      });
    }
  });
};
