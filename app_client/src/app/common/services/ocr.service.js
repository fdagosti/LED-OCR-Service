(function(){

  angular
  .module('led-ocr')
  .service('ocr', ocr);

  ocr.$inject = ["$http"];   
  function ocr($http) {

    var status = function(){
      return $http.get("api/status");
    };

    var check = function(){
      return $http.post("api/check");
    };

   
   return {
     status : status,
     check : check,
   };
 }
})();