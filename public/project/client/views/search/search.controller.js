"use strict";
(function(){
    angular
        .module("MarsApp")
        .controller("SearchController",SearchController);

    function SearchController($scope,$location,$rootScope,$http)
    {
        $scope.$location = $location;
        $scope.search = search;
        
        $rootScope.$on("searchresults",function(event,results){
           $scope.searchResults = results; 
        });
        function search(SearchTitle)
        {
            var searchResults = [];
            
            console.log("search title = "+ SearchTitle);
            var apiKey = "99b0e463-f753-4481-875a-a7ae744ea92d";

            var url = "http://content.guardianapis.com/search?q="+SearchTitle+"&api-key="+apiKey+"&callback=JSON_CALLBACK";
            $http.jsonp(url)
                .success(function(response){
                   console.log(response);
                   var responseObject = response.response;
                   var searchArray = responseObject.results;
                   for(var i=0; i<searchArray.length; i++)
                   {
                       var searchResult = {};
                       searchResult.url = searchArray[i].webUrl;
                       searchResult.title = searchArray[i].webTitle;
                       searchResults.push(searchResult); 
                   }
                   $scope.searchResults = searchResults;
                   console.log("***************");
                   
                   $rootScope.$broadcast("searchresults",searchResults);
                   console.log(searchResults);
                });
                $location.path("/searchResults");
        }


    }
})();