ionicApp.controller('HomeWorldCtrl', function($scope, mainService,$state,$rootScope,$state) {




 mainService.HomeWorld($rootScope.HomeWorld)
 
                .then(function(response){
					
					
					$scope.HomeWolrds = response.data;	
					
						console.log($scope.HomeWolrds);		
					
                }, function(error) {

                });

	       

});