
!function(){

	var initializeMap = function(){
		
		var mapStyling = 
		[
		{
			"featureType":"water",
			"elementType":"all",
			"stylers":[{"hue":"#71d6ff"},{"saturation":100},{"lightness":-5},{"visibility":"on"}]
		},
		{
			"featureType":"poi",
			"elementType":"all",
			"stylers":[{"hue":"#ffffff"},{"saturation":-100},{"lightness":100},{"visibility":"off"}]
		},
		{
			"featureType":"transit",
			"elementType":"all",
			"stylers":[{"hue":"#ffffff"},{"saturation":0},{"lightness":100},{"visibility":"off"}]
		},
		{
			"featureType":"road.highway",
			"elementType":"geometry",
			"stylers":[{"hue":"#deecec"},{"saturation":-73},{"lightness":72},{"visibility":"on"}]
		},
		{
			"featureType":"road.highway",
			"elementType":"labels",
			"stylers":[{"hue":"#bababa"},{"saturation":-100},{"lightness":25},{"visibility":"on"}]
		},
		{
			"featureType":"landscape",
			"elementType":"geometry",
			"stylers":[{"hue":"#e3e3e3"},{"saturation":-100},{"lightness":0},{"visibility":"on"}]
		},
		{
			"featureType":"road",
			"elementType":"geometry",
			"stylers":[{"hue":"#ffffff"},{"saturation":-100},{"lightness":100},{"visibility":"simplified"}]
		},
		{
			"featureType":"administrative",
			"elementType":"labels",
			"stylers":[{"hue":"#59cfff"},{"saturation":100},{"lightness":34},{"visibility":"on"}]
		}
		]

		var center = new google.maps.LatLng(39.50 , -98.35);

		var mapOptions = {
			mapTypeControlOptions: {
				mapTypeIds: ['Styled']
			},	
			zoom: 5, 
			center: center,
			mapTypeID: 'Styled'
		};


		var styledMap = new google.maps.StyledMapType(mapStyling, {name: "Styled Map"});
		map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);

		map.mapTypes.set('map_style', styledMap);
		map.setMapTypeId('map_style');

		plotLoanPortfolios(ENV.loanPortfolio)
	}

	var plotLoanPortfolios = function(loanPortfolioData){
		loanPortfolioData.forEach(function(loan){

			var loanPortfolioIcon = "images/loanPortfolioIcon.png"

			var contentString = '<div id="content">'+
			'<div id="siteNotice">'+
			'</div>'+
			'<h1 id="firstHeading" class="firstHeading">'+loan.institution_name+'</h1>'+
			'<div id="bodyContent">'+
			'<p> '+ 'Default Rate: ' + loan.default_rate +' </p>'+ 
			'<p> '+ 'Outstanding Principal: $' + loan.outstanding_principal+' </p>'+
			'<p> '+ 'Institution Address: ' + loan.address +'  </p>'+
			'</div>'+
			'</div>';

			var infowindow = new google.maps.InfoWindow({
				content: contentString
			})

			var loanLatLng = new google.maps.LatLng(loan.latitude, loan.longitude)

			var marker = new google.maps.Marker({
				position: loanLatLng,
				map: map,
				icon: loanPortfolioIcon,
				title: loan.institution_name
			})

			google.maps.event.addListener(marker, 'click', function() {
				infowindow.open(map,marker);
			});
		})
	}

	$(function(){
		if (document.getElementById('map-canvas')) initializeMap();
	});

}();