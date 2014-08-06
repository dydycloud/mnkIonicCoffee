angular.module("authService", [])
.factory "Auth", ($firebaseSimpleLogin, FIREBASE_URL, $rootScope) ->
  ref = new Firebase(FIREBASE_URL)
  auth = $firebaseSimpleLogin(ref)
  Auth =
    register: (user) ->
      $rootScope.authInfo = user
      auth.$createUser user.email, user.password

    signedIn: ->
      auth.user isnt null

    logout: ->
      $rootScope.authInfo = null
      auth.$logout()

  $rootScope.signedIn = ->
    Auth.signedIn()

  Auth