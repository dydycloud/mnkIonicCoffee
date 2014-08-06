# Ionic Starter App

# angular.module is a global place for creating, registering and retrieving Angular modules
# 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
# the 2nd parameter is an array of 'requires'

# Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
# for form inputs)
angular.module("starter", [
  "ionic"
  "starter.config"
  "firebase"
  "starter.home.controllers"
  "starter.auth.controllers"
])
.run(($ionicPlatform) ->
  $ionicPlatform.ready ->
    cordova.plugins.Keyboard.hideKeyboardAccessoryBar true  if window.cordova and window.cordova.plugins.Keyboard
    StatusBar.styleDefault()  if window.StatusBar
)