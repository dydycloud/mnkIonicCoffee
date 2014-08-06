angular.module("starter.home.controllers", []).controller("HomeCtrl", [
  "$scope", "$location", "Auth", function($scope, $location, Auth) {
    "use strict";
    this.greating = "Wha Gwon World!!";
    this.ready = "Are you ready?";
    console.log("HomeCtrl");
    return $scope.logout = function() {
      console.log("logout");
      Auth.logout();
      return $location.path('/');
    };
  }
]);
