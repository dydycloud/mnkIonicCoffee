angular.module("starter.home.controllers", [])
.controller "HomeCtrl", [
  "$scope"
  "$location"
  "$rootScope"
  "Auth"
  ($scope, $location, $rootScope, Auth) ->
    "use strict"
    @greating = "Wha Gwon World!!"
    @ready = "Are you ready?"
    console.log "HomeCtrl"

    $scope.logout = ()->
      console.log "logout"
      $rootScope.authInfo = ""
      Auth.logout()
      $location.path('/')
]
