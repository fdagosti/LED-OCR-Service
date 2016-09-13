(function(){
    angular
        .module("led-ocr")
        .directive("appfooter", footerGeneric);

    function footerGeneric(){
        return {
            restrict: "EA",
            templateUrl: "src/app/common/directives/footer/footer.template.html"
        };
    }
})();