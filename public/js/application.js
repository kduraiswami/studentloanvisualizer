
!function(){

	var initializeMap = function(){
		var center = new google.maps.LatLng(39.50 ,  -98.35);
		var mapOptions = {zoom: 5, center: center};
		map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
	}

	var markerLatLng = new google.maps.LatLng(39.50 ,  -98.35)

	var marker = new google.maps.Marker({
		position: markerLatLng,
		map: map,
		title: ENV.loanPortfolio.institution_name
	});


	$(function(){
		if (document.getElementById('map-canvas')) initializeMap();
	});

}();