#globals angular, console 
angular.module("starter.auth.controllers", ["authService"])
.controller "AuthCtrl", [
  "$scope"
  "$location"
  "Auth"
  ($scope, $location, Auth) ->
    "use strict"

    if Auth.signedIn()
      $location.path('/')

    $scope.$on 'firebaseSimpleLogin:login', ()->
      $location.path('/')
    
    $scope.login = (user)->
      Auth.login(user).then(()->
        $location.path('/')
      )
    $scope.signup = (user)->
      Auth.signup(user).then((authUser)->
        $location.path('/')
      )
]