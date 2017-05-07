ionicApp.controller('MapCtrl', function($scope, mainService,$rootScope,$state,$cordovaGeolocation) {





  var options = {timeout: 10000, enableHighAccuracy: true};
 
  $cordovaGeolocation.getCurrentPosition(options).then(function(position){
 
    var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
 
    var mapOptions = {
      center: latLng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
 
	//load map
    $scope.map = new google.maps.Map(document.getElementById("map"), mapOptions);
    //wait until map is loaded
    google.maps.event.addListenerOnce($scope.map, 'idle', function(){
	    //put marker
/*
		var marker = new google.maps.Marker({
		      map: $scope.map,
		      animation: google.maps.Animation.DROP,
		      position: latLng
		}); 
		//popup when marker clicked
		var infoWindow = new google.maps.InfoWindow({
		      content: "You are here!"
		});
		 
		google.maps.event.addListener(marker, 'click', function () {
		      infoWindow.open($scope.map, marker);
		});  
*/
		
		
		
		
		//=======================
		
		$scope.URLLink = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location="+position.coords.latitude+","+position.coords.longitude+"&radius=5000&type=book_store&keyword=comic&key=AIzaSyDoKu0u2Ln7WbVRp2gz8-ZxB2WbqCz1u3s";
		
		
		
		mainService.getSores($scope.URLLink)
 
                .then(function(response){
					
					
					var places = response.data.results;	
					console.log(response);
					
				
				
				
				var infoWindow = new google.maps.InfoWindow();
				
					for(i = 0; i < places.length; i++){
						var data = places[i];
					  title=places[i].vicinity;
					  
					  var latLng = new google.maps.LatLng(places[i].geometry.location.lat,places[i].geometry.location.lng);

					  var marker = new google.maps.Marker({
						      map: $scope.map,
						      animation: google.maps.Animation.DROP,
						      position: latLng,
						      title: title
					  });
					  
					  
					    // Creating a closure to retain the correct data 
						//Note how I pass the current data in the loop into the closure (marker, data)
						(function(marker, data) {
						
						  // Attaching a click event to the current marker
						  google.maps.event.addListener(marker, "click", function(e) {
						    //infoWindow.setContent(data.vicinity);
						    //infoWindow.open(map, marker);
						    var url = "geo://0.0?q="+data.vicinity;
						    window.open(url, '_system')
						  });
						
						})(marker, data);
					  
					  
					}
					
					//console.log(markers);
					
/*
					console.log(names);
					console.log(markerr);
					console.log(places.length);
					for(i = 0; i < places.length; i++){
						var current = names[i];
						var mark = markerr[i];
						google.maps.event.addListener(mark, 'click', function () {
								
						      var latLngs = "geo://0,0?q="+current;
						      console.log(latLngs);
						      console.log(names);
						      console.log(current);
						      console.log(mark);
						      window.open(latLngs, '_system');
					  });
					}
*/
					
							
					
                }, function(error) {

                });
		//=======================   
	 
	});
 
  }, function(error){
    window.alert("Could not get location");
  });




});