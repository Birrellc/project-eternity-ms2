function initMap() {
    const locationNewcastle = { lat: 54.9754904, lng: -1.6173998 };
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 13,
      center: locationNewcastle,
      gestureHandling: "cooperative",
    });
    new google.maps.Marker({
      position: locationNewcastle,
      map,
      title: "Hello World!",
    });
  }