angular.module("starter.auth.controllers", ["authService"]).controller("AuthCtrl", [
  "$scope", "$location", "Auth", function($scope, $location, Auth) {
    "use strict";
    this.greating = "This is a new page";
    this.ready = "Are you ready for more?";
    console.log(Auth);
    if (Auth.signedIn()) {
      $location.path('/');
    }
    return $scope.register = function(user) {
      return Auth.register(user).then(function(authUser) {
        return $location.path('/');
      });
    };
  }
]);
