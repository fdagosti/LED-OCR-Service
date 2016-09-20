((function(){

angular.module('led-ocr').controller('landingCtrl', function($scope, ocr) {
 var vm = this;

 vm.check = function(){
  ocr.check()
  .then(function(response){
    vm.number = response.data;
    console.log(vm.number);
    vm.imgsrc = "led_output.png?"+ new Date().getTime();
    vm.imgorig = "led_original.png?"+ new Date().getTime();
  }, function(err){
    vm.number = err.data;
    
  })
 };


});

})());