((function(){

angular.module('led-ocr').controller('landingCtrl', function($scope, ocr) {
 var vm = this;

 vm.status = function(){
  ocr.status()
  .then(function(response){
    console.log("status answer");
    console.log(response.data);
  }, function(err){
    console.log("ERROR ");
    console.log(err.data);
  })
 };

 vm.check = function(){
  ocr.check()
  .then(function(response){
    console.log("check answer");
    console.log(response.data);
  }, function(err){
    console.log("ERROR ");
    console.log(err.data);
  })
 };


});

})());