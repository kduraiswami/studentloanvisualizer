
!function(){

  var initializeMap = function(){
    var center = new google.maps.LatLng(37.7580 , -122.4400);
    var mapOptions = {zoom: 13, center: center};
    map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);

}

$(function(){
  if (document.getElementById('map-canvas')) initializeMap();
});

}();