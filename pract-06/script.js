
function createMap() {
    let map = L.map('singaporeMap');
    map.setView([1.3521, 103.8198], 13);
    let tileLayer = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: 'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw' //demo access token
    })
    tileLayer.addTo(map);
    return map;
}







async function main() {
    let map = createMap();
    let response = await axios.get('hdb.json');
    
    let hdbLayer = L.layerGroup();
    for (let item of response.data) {
        let marker = L.marker(item.coordinates).addTo(hdbLayer);
        marker.bindPopup(`<h1>${item.name}</h1>`)
    }
    hdbLayer.addTo(map); 

    let mallResponse = await axios.get('mall.json');
    let mallLayer = L.layerGroup();
    for (let item of mallResponse.data) {
        let marker = L.marker(item.coordinates).addTo(mallLayer);
        marker.bindPopup(`<h1>${item.name}</h1>`)
    }
    

    let natureResponse = await axios.get('nature.json');
    let natureLayer = L.layerGroup();
    for(let item of natureResponse.data) {
        let marker = L.marker(item.coordinates).addTo(natureLayer);
        marker.bindPopup(`<h1>${item.name}</h1>`)
    }
    ;

    let baseLayers = {
        'HDB': hdbLayer,
        'Malls': mallLayer,
        'Nature': natureLayer
    }

    L.control.layers(baseLayers, {}).addTo(map);
    
}
main();