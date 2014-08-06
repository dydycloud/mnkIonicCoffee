# Declare app level module which depends on filters, and services
angular.module("starter.config", [])
.config [
  "$stateProvider"
  "$urlRouterProvider"
  ($stateProvider, $urlRouterProvider) ->
    "use strict"
    $stateProvider.state("home",
      url: "/home"
      templateUrl: "templates/home.html"
      controller: "HomeCtrl as home"
    ).state "signup",
      url: "/signup"
      templateUrl: "templates/signup.html"
      controller: "AuthCtrl as auth"

    $urlRouterProvider.otherwise "/home"
]
# your Firebase URL goes here
# should look something like: https://blahblahblah.firebaseio.com
.constant "FIREBASE_URL", "https://mnktest.firebaseio.com/"