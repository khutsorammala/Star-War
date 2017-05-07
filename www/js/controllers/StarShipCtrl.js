ionicApp.controller('StarShipCtrl', function($scope, mainService,$state,$rootScope,$state, $ionicHistory) {

	 console.log($rootScope.StarShip);  
	 $scope.goBack = function() {
        console.log('Going back');
        $ionicHistory.backView().go();
    };   

});