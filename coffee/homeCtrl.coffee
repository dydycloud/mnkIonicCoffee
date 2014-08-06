angular.module("starter.home.controllers", [])
.controller "HomeCtrl", [
  "$scope"
  "$location"
  "Auth"
  ($scope, $location, Auth) ->
    "use strict"
    @greating = "Wha Gwon World!!"
    @ready = "Are you ready?"
    console.log "HomeCtrl"

    $scope.logout = ()->
      console.log "logout"
      Auth.logout()
      $location.path('/')
]
