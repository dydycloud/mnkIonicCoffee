angular.module("starter.auth.controllers", ["authService"]).controller("AuthCtrl", [
  "$scope", "$location", "Auth", function($scope, $location, Auth) {
    "use strict";
    if (Auth.signedIn()) {
      $location.path('/');
    }
    $scope.$on('firebaseSimpleLogin:login', function() {
      return $location.path('/');
    });
    $scope.login = function(user) {
      return Auth.login(user).then(function() {
        return $location.path('/');
      });
    };
    return $scope.signup = function(user) {
      return Auth.signup(user).then(function(authUser) {
        return $location.path('/');
      });
    };
  }
]);
