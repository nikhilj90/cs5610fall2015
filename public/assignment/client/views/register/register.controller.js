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
                    $scope.error = "Both the password and verify password fields should match";
                } else {
                    var newUser = {
                        username: $scope.username,
                        password: $scope.password,
                        email: $scope.email
                    };
                    UserService.createUser(newUser, function(user){
                            //update rootscope user


                            //Navigate to profile

                        })
                   console.log("New user created");
                   $rootScope.user = newUser;
                   $location.path("/profile");
                }
            }
        }
    }
})();