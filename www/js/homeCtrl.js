angular.module("starter.home.controllers", []).controller("HomeCtrl", [
  "$scope", "$location", "$rootScope", "Auth", function($scope, $location, $rootScope, Auth) {
    "use strict";
    this.greating = "Wha Gwon World!!";
    this.ready = "Are you ready?";
    console.log("HomeCtrl");
    return $scope.logout = function() {
      console.log("logout");
      $rootScope.authInfo = "";
      Auth.logout();
      return $location.path('/');
    };
  }
]);
