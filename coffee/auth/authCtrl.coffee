#globals angular, console 
angular.module("starter.auth.controllers", ["authService"])
.controller "AuthCtrl", [
  "$scope"
  "$location"
  "Auth"
  ($scope, $location, Auth) ->
    "use strict"
    @greating = "This is a new page"
    @ready = "Are you ready for more?"
    console.log Auth
    if Auth.signedIn()
      $location.path('/')

    $scope.register = (user)->
      Auth.register(user).then((authUser)->
        $location.path('/')
      )
]