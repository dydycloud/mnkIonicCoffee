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
