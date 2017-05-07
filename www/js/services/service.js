ionicApp.service('mainService', function($http) {

   return {
       data: function() {

           return $http({
                           
                            url: 'http://swapi.co/api/people/',
                            method: "GET",
                            headers: {'Content-Type': 'application/x-www-form-urlencoded'}

                       })
                        .then(function(response) {
	                      
                                return response;
                       

                   }, function(response) {
                       // something went wrong
                       return $q.reject(response);
           });
       },
       
       
       HomeWorld: function (info) {

           return $http({
                           
                            url: info,
                            method: "GET",
                            headers: {'Content-Type': 'application/x-www-form-urlencoded'}

                       })
                        .then(function(response) {
	                      
                                return response;
                       

                   }, function(response) {
                       // something went wrong
                       return $q.reject(response);
           });
       },
       
       getSores: function (info) {

           return $http({
                           
                            url: info,
                            method: "GET",
                            headers: {'Content-Type': 'application/x-www-form-urlencoded'}

                       })
                        .then(function(response) {
	                      
                                return response;
                       

                   }, function(response) {
                       // something went wrong
                       return $q.reject(response);
           });
       }

   };


});