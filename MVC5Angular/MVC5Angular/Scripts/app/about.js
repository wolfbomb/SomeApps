(function() {
    "use strict";

    angular
        .module("main")
        .controller("AboutController", AboutController);

    AboutController.$inject = ["$scope"];

    function AboutController($scope) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = "AboutController";

        activate();

        function activate() {}
    }
})();