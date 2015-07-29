
!function(){

	var initializeMap = function(){
		var center = new google.maps.LatLng(39.50 ,  -98.35);
		var mapOptions = {zoom: 5, center: center};
		map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);

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

	plotLoanPortfolios(ENV.loanPortfolio)
	}

	$(function(){
		if (document.getElementById('map-canvas')) initializeMap();
	});

}();