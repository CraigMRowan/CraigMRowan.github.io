/*Google Map*/
function initMap() {
    var op = {lat: -35.227488, lng: 173.948835};
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 9,
      center: op
    });
    var marker = new google.maps.Marker({
      position: op,
      map: map
    });
}