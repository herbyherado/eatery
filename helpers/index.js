function getMap(name, latitude, longitude) {
  let center = {lat: latitude, lng: longitude}
  let map = new google.maps.Map(document.getElementById('map'), {
    zoom: 18,
    center: center
  });

  let marker = new google.maps.Marker({
    map: map,
    draggable: true,
    animation: google.maps.Animation.BOUNCE,
    position: center
  })

  var infowindow = new google.maps.InfoWindow({
    content: name
  })
  infowindow.open(map, marker)
}

// AIzaSyBQ8XReS3eHeauUwMB-2EkZJMfKvqmuSWg
module.exports = getMap;