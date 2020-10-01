function initMap() {
    const myLatLng = { lat: 54.971829, lng: -1.608997 };
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 10,
      center: myLatLng,
    });
    new google.maps.Marker({
      position: myLatLng,
      map,
      title: "Eternity Restaurant",
    });
  }