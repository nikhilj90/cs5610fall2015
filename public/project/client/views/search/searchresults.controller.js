"use strict";
(function(){
    angular
        .module("MarsApp")
        .controller("SearchController",SearchController);


    function SearchController($scope,$location,$rootScope, $http)
    {
        $scope.$location = $location;
        $scope.searchResults = $rootScope.searchResults;
        
        


    }
})();