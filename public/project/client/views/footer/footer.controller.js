"use strict";

(function() {
    angular
        .module("MarsApp")
        .controller("FooterController", FooterController);

    function FooterController($scope, $location) {
        $scope.$location = $location;
    }
})();
