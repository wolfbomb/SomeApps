// Define you directives here. Directives can be added to same module as 'main' or a seperate module can be created.
(function() {
    "use strict";

    angular
        .module("main")
        .directive("testDirective", testDirective);

    testDirective.$inject = ["$window"];

    function testDirective($window) {
        // Usage:
        //     <directive1></directive1>
        // Creates:
        // 
        var directive = {
            link: link,
            restrict: "A"
        };
        return directive;

        function link(scope, element, attrs) {
            console.log("Directive linked.");
        }
    }

})();