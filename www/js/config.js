angular.module("starter.config", []).config([
  "$stateProvider", "$urlRouterProvider", function($stateProvider, $urlRouterProvider) {
    "use strict";
    $stateProvider.state("home", {
      url: "/home",
      templateUrl: "templates/home.html",
      controller: "HomeCtrl as home"
    }).state("signup", {
      url: "/signup",
      templateUrl: "templates/auth/signup.html",
      controller: "AuthCtrl as auth"
    }).state("signin", {
      url: "/signin",
      templateUrl: "templates/auth/signin.html",
      controller: "AuthCtrl as auth"
    });
    return $urlRouterProvider.otherwise("/home");
  }
]).constant("FIREBASE_URL", "https://mnktest.firebaseio.com/");
