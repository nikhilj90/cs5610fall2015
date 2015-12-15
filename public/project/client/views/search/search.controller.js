"use strict";

(function() {
    angular
        .module("MarsApp")
        .controller("SearchController", SearchController);

    function SearchController($scope,SearchService) {
        var model=this;
        model.search=search;
        model.like=like;

        function search(title){
            SearchService.searchMovieByTitle(title).then(function(response){
                model.response=response;
            });
        }
    }
})();
