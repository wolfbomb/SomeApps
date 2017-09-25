(function() {
    "use strict";

    angular
        .module("main")
        .controller("MainController", MainController);

    MainController.$inject = ["$scope"];

    function MainController($scope) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = "MainController";

        activate();

        function activate() {}
    }
})();