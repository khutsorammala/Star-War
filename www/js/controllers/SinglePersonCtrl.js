ionicApp.controller('SinglePersonCtrl', function($scope, mainService,$rootScope,$state,$ionicHistory) {

$scope.goBack = function() {
        console.log('Going back');
        $ionicHistory.backView().go();
    };  

$scope.displayHomeWorld = function(info){
	
		console.log(info);
		$rootScope.HomeWorld=info;
		
		$state.go("HomeWorldPage");
		
	}

$scope.displayStarShip = function(info){
	
		console.log(info);
		$rootScope.StarShip=info;
		
		$state.go("StarShippPage");
		
	}

});