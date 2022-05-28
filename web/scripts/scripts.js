// Tabbed Menu
function openMenu(evt, menuName) {
  var i, x, tablinks;
  x = document.getElementsByClassName("menu");
  for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < x.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" w3-dark-grey", "");
  }
  document.getElementById(menuName).style.display = "block";
  evt.currentTarget.firstElementChild.className += " w3-dark-grey";
  }
  document.getElementById("myLink").click();

// Google Map 
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