// Define you service here. Services can be added to same module as 'main' or a seperate module can be created.

(function() {
    "use strict";

    angular
        .module("main")
        .factory("testService", testService);

    testService.$inject = ["$http", "ngResource"];

    function testService($http) {
        var service = {
            getData: getData
        };

        return service;

        function getData() {}
    }
})();