// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var ionicApp = angular.module('ionicApp', ['ionic','ui.router'])


.config(function($stateProvider,$urlRouterProvider){

	// For any unmatched url, send to /business
    $urlRouterProvider.otherwise("/ListViewPage")
    
	$stateProvider
	.state('ListViewPage', {
		//nested state [services is the nested state of business state]
         url: "/ListViewPage",
         templateUrl: "templates/ListViewPage.html",
         controller: 'mainCtrl'
     })
     
     
	.state('SingleViewPage', {
		//nested state [services is the nested state of business state]
         url: "/SingleViewPage",
         templateUrl: "templates/SingleViewPage.html",
         controller: 'SinglePersonCtrl'
     }) 
     
     .state('HomeWorldPage', {
		//nested state [services is the nested state of business state]
         url: "/HomeWorldPage",
         templateUrl: "templates/HomeWorldPage.html",
         controller: 'HomeWorldCtrl'
     })       
     
     .state('StarShippPage', {
		//nested state [services is the nested state of business state]
         url: "/StarShippPage",
         templateUrl: "templates/StarShippPage.html",
         controller: 'StarShipCtrl'
     })                          

})








.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

