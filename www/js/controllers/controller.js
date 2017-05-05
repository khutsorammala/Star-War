ionicApp.controller('mainCtrl', function($scope, mainService,$state,$rootScope) {

	        mainService.data()
                .then(function(response){
					
					
					$scope.people = response.data.results;	
					
								
					
                }, function(error) {

                });
                
	console.log("Javascript is working")
	
	$scope.displayPerson = function(info){
		
		$rootScope.person=info;
		
		$state.go("SingleViewPage");
		
	}


});