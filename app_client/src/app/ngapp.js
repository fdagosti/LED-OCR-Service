(function(){

    angular.module("led-ocr", ["ngRoute", "btford.socket-io"])
    .factory("mySocket", function(socketFactory){
        return socketFactory();
    });

    function config ($routeProvider, $locationProvider,$httpProvider) {
        $httpProvider.useLegacyPromiseExtensions(false);

        
        $routeProvider
            .when("/", {
                templateUrl: "src/app/landing/landing.template.html",
                 controller: "landingCtrl",
                 controllerAs: "vm"
            })
            .otherwise({redirectTo: "/"});

        $locationProvider.html5Mode(true);
    }

    angular
        .module("led-ocr")
        .config(["$routeProvider", "$locationProvider","$httpProvider", config]);

})();