"use strict";

(function () {
    angular
        .module("MarsApp")
        .config(Config);

    function Config($routeProvider) {
        $routeProvider.when("/home", {
            templateUrl: "views/home/home.view.html"
        })
        .when("/register", {
            templateUrl: "views/register/register.view.html",
            controller: "RegisterController",
            controllerAs: "model"
        })
        .when("/login", {
            templateUrl: "views/login/login.view.html",
            controller: "LoginController",
            controllerAs: "model"
        })
        .when("/profile", {
            templateUrl: "views/profile/profile.view.html",
            controller: "ProfileController",
            controllerAs: "model"
        })
        .when("/search", {
            templateUrl: "views/search/search.view.html",
            controller: "SearchController",
            controllerAs: "model"
        })
        .when("/result/:idIMDB", {
            templateUrl: "views/result/result.view.html",
            controller: "ResultController",
            controllerAs: "model"
        })
        .when("/maps", {
            templateUrl: "views/maps/maps.html",
            controller: "MapsController",
           
        })
        .otherwise({
           redirectTo: "/home"
        });
    }
})();