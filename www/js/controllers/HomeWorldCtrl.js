ionicApp.controller('HomeWorldCtrl', function($scope, mainService,$state,$rootScope,$state,$ionicHistory) {


$scope.goBack = function() {
        console.log('Going back');
        $ionicHistory.backView().go();
    };  

 mainService.HomeWorld($rootScope.HomeWorld)
 
                .then(function(response){
					
					
					$scope.HomeWolrds = response.data;	
					
						console.log($scope.HomeWolrds);		
					
                }, function(error) {

                });

	       

});