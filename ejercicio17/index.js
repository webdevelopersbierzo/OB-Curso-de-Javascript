// Initialize and add the map
function initMap() {
    // The location of Uluru
    const uluru = { lat: -25.344, lng: 131.031 };
    const fav1 = { lat: 42.459878010339025,lng: -6.76014449920462 };
    const fav2 = { lat: 42.543521710351754, lng:-6.5937565408984415 };
    const fav3 = { lat: 40.784193088220206, lng:-73.969239995552};
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 2,
      center: fav1,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
      position: fav1,
      map: map,
    });
    const marker2 = new google.maps.Marker({
        position:fav2,
        map:map,
    });
    const marker3 = new google.maps.Marker({
        position:fav3,
        map:map,
    })
  }
  
  window.initMap = initMap;
  