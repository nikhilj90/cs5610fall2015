'use strict';
(function(){
    angular
        .module("FormBuilderApp")
        .controller("RegisterController", RegisterController);

    function RegisterController($scope, $location, $rootScope, UserService) {
        $scope.register = register;

        function register() {
            if($scope.username, $scope.password, $scope.verifyPassword, $scope.email) {
                if ($scope.password !== $scope.verifyPassword){
                    $scope.error = "Both passowrd fields don't match fields should match";
                } else {
                    var newUser = {
                        username: $scope.username,
                        password: $scope.password,
                        email: $scope.email
                    };
                    UserService.createUser(newUser)
                        .then(function(newlyCreatedUser) {
                            $rootScope.user = newlyCreatedUser;
                            $location.path("/profile");
                        });
                }
            }
        }
    }
})();