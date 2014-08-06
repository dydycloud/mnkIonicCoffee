angular.module("authService", [])
.factory "Auth", ($firebaseSimpleLogin, FIREBASE_URL, $rootScope) ->
  ref = new Firebase(FIREBASE_URL)
  auth = $firebaseSimpleLogin(ref)
  Auth =
    signup: (user) ->
      $rootScope.authInfo = user
      auth.$createUser user.email, user.password

    signedIn: ->
      auth.user isnt null

    login: (user)->
      $rootScope.authInfo = user
      auth.$login('password', user)

    logout: ->
      auth.$logout()

  $rootScope.signedIn = ->
    Auth.signedIn()

  Auth