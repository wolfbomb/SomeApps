// Main configuration file. Sets up AngularJS module and routes and any other config objects

var appRoot = angular.module("main", ["ngRoute", "ngGrid", "ngResource"]); //Define the main module

appRoot
    .config([
        "$routeProvider", function($routeProvider) {
            //Setup routes to load partial templates from server. TemplateUrl is the location for the server view (Razor .cshtml view)
            $routeProvider
                .when("/home", { templateUrl: "/home/main", controller: "MainController" })
                .when("/contact", { templateUrl: "/home/contact", controller: "ContactController" })
                .when("/about", { templateUrl: "/home/about", controller: "AboutController" })
                .when("/demo", { templateUrl: "/home/demo", controller: "DemoController" })
                .when("/angular", { templateUrl: "/home/angular" })
                .otherwise({ redirectTo: "/home" });
        }
    ])
    .controller("RootController", [
        "$scope", "$route", "$routeParams", "$location", function($scope, $route, $routeParams, $location) {
            $scope.$on("$routeChangeSuccess", function(e, current, previous) {

                var isAuthorized = true; // hard coded - use service to authorize

                if (current.controller != undefined) {
                    // -- check here if we are authorized to proceed
                    if (!isAuthorized) {
                        $location.url("/home");
                    } else {
                        $scope.activeViewPath = $location.path();
                    }
                }
            });
        }
    ]);