angular.module("starter.config", []).config([
  "$stateProvider", "$urlRouterProvider", function($stateProvider, $urlRouterProvider) {
    "use strict";
    $stateProvider.state("home", {
      url: "/home",
      templateUrl: "templates/home.html",
      controller: "HomeCtrl as home"
    }).state("signup", {
      url: "/signup",
      templateUrl: "templates/signup.html",
      controller: "AuthCtrl as auth"
    });
    return $urlRouterProvider.otherwise("/home");
  }
]).constant("FIREBASE_URL", "https://mnktest.firebaseio.com/");
