"use strict";

(function() {
    angular
        .module("MarsApp")
        .controller("HeaderController", HeaderController);

    function HeaderController($scope, $location, $rootScope) {
        $scope.$location = $location;
        $scope.logout = logout;

        $rootScope.$on('authenticate', function() {
           $scope.user = $rootScope.currentUser;
        });

        function logout() {
            $scope.user = null;
            $location.url('/login');
        }
    }
})();
