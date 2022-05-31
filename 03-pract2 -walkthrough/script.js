function createMap() {
    let centerpoint = [1.3521, 103.8198];
    let map = L.map('map');
    map.setView(centerpoint, 5);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '© OpenStreetMap'
    }).addTo(map);
    return map;
}








async function main (){

    let map = createMap();
    let response = await axios.get(' https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_week.geojson')
    let markerClusterGroup = L.markerClusterGroup();
    markerClusterGroup.addTo(map);
    for (let feature of response.data.features) {
        let lat = feature.geometry.coordinates[1];
        let lng = feature.geometry.coordinates[0];
        L.marker([lat, lng]).bindPopup(`<h1>${feature.properties.place}</h1>`).addTo(markerClusterGroup);

    }


}
main();