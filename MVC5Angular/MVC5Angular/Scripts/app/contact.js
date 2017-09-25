(function() {
    "use strict";

    angular
        .module("main")
        .controller("ContactController", ContactController);

    ContactController.$inject = ["$scope"];

    function ContactController($scope) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = "ContactController";

        activate();

        function activate() {}
    }
})();