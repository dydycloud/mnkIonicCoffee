angular.module("starter", ["ionic", "starter.config", "firebase", "starter.home.controllers", "starter.auth.controllers"]).run(function($ionicPlatform) {
  return $ionicPlatform.ready(function() {
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      return StatusBar.styleDefault();
    }
  });
});

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

angular.module("authService", []).factory("Auth", function($firebaseSimpleLogin, FIREBASE_URL, $rootScope) {
  var Auth, auth, ref;
  ref = new Firebase(FIREBASE_URL);
  auth = $firebaseSimpleLogin(ref);
  Auth = {
    signup: function(user) {
      $rootScope.authInfo = user;
      return auth.$createUser(user.email, user.password);
    },
    signedIn: function() {
      return auth.user !== null;
    },
    login: function(user) {
      $rootScope.authInfo = user;
      return auth.$login('password', user);
    },
    logout: function() {
      return auth.$logout();
    }
  };
  $rootScope.signedIn = function() {
    return Auth.signedIn();
  };
  return Auth;
});

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
