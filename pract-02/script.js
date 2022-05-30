async function quake() {
    let response = await axios.get("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_week.geojson");
    console.log(response)
    return response.data.features;
}

window.addEventListener("DOMContentLoaded", async function(){
    
    let quakearray = await quake();
    let markerClusterLayer = L.markerClusterGroup();
    for (let t of quakearray) {
        // each t is an array
        // element 0 is lng, element 1 is lat
        let lat = t.geometry.coordinates[1];
        let lng = t.geometry.coordinates[0];

        console.log(lat);
        console.log(lng);
      
        let marker = L.marker([lat,lng]);
        marker.addTo(markerClusterLayer);
    }
    markerClusterLayer.addTo(map);

});


let singapore = [ 1.29, 103.85]; 


let map = L.map('singaporeMap').setView(singapore, 13);

// setup the tile layers
// this setup the drawing of the map
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw' //demo access token
}).addTo(map);

;