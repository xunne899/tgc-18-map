// // L.map will create a new map object
// // the first argument is the ID of the
// // element that will have the
// let map = L.map('map');

// // set the center of the map
// // has 2 arguments
// // first argument: the center point 
// // second argument: the higher it is
// // the more zoomed in the map will be
// map.setView([1.3521, 103.8198], 13);

// // add the tile layer for the map
// // first argument: data source of your map
// // second argument: attribution text
// L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
//     attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
//     maxZoom: 18,
//     id: 'mapbox/streets-v11',  // style of the tiles
//     tileSize: 512,
//     zoomOffset: -1,
//     accessToken: 'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw' //demo access token
// }).addTo(map);

// function getRandomLatLng(map) {
//     // get the boundaries of the map
//     let bounds = map.getBounds();
//     let southWest = bounds.getSouthWest();
//     let northEast = bounds.getNorthEast();
//     let lngSpan = northEast.lng - southWest.lng;
//     let latSpan = northEast.lat - southWest.lat;

//     let randomLng = Math.random() * lngSpan + southWest.lng;
//     let randomLat = Math.random() * latSpan + southWest.lat;

//     return [ randomLat, randomLng,];
// }

// // GREEN CIRCLES
// let greenCircles = L.layerGroup(); // a layer group is an invisible layer
//                                    // it can contain other layers (eg. markers, circles etc.)
// for (let i =0; i < 3; i++) {
//     L.circle(getRandomLatLng(map),{
//         'radius': 400,
//         'color': 'green'
//     }).addTo(greenCircles)
// }
// greenCircles.addTo(map);

// // RANDOM MARKERS
// let markers = L.layerGroup();
// for (let i =0; i < 3; i++) {
//     L.marker(getRandomLatLng(map)).addTo(markers);
// }

// // RED CIRCLES
// let redCircles = L.layerGroup();
// for (let i =0; i < 3; i++) {
//     L.circle(getRandomLatLng(map),{
//         'radius': 500,
//         'color': 'red'
//     }).addTo(redCircles)
// }

// // YELLOW CIRCLES
// let yellowCircles = L.layerGroup();
// for (let i =0; i < 3; i++) {
//     L.circle(getRandomLatLng(map),{
//         'radius': 1000,
//         'color': 'yellow'
//     }).addTo(yellowCircles);
// }

// // we can create layer control and add it to the map
// // only one can be selected for the base layer
// let baseLayers = {
//     'Green Circles': greenCircles,
//     'Markers': markers
// }

// let overlays = {
//     'Red Circles': redCircles,
//     'Yellow Circles': yellowCircles
// }

// document.querySelector("#btnToggle").addEventListener('click', function(){
//     // hasLayer function that takes in one layer as an argument
//     // if that layer is being displayed in the map, then it will return true
//     if(map.hasLayer(greenCircles)) {
//         // if the map is showing green circles, then show the markers instead
//         map.removeLayer(greenCircles);
//         map.addLayer(markers); // show the markers
//     } else {
//         map.removeLayer(markers);
//         map.addLayer(greenCircles);
//     }
// })









// create a map object
//  L.map('map') ==> create a new map.
// The first argument is the id of the <div> that will hold the map

let centerPoint = [1.3521, 103.8198];
let map = L.map('map');  // the map variable will store an object referring to the Leaflet map
map.setView(centerPoint, 13);  // setView takes one array as the argument
                               // it is the lat lng of the center point of the map
                               // second argument is the zoom level (how zoomed in we want the map be)

// set up the tile layers
let tileLayer = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw' //demo access token
})

// add the tilelayer to the map
tileLayer.addTo(map)  // <-- map is the object that we created via L.map()

// add a hundred markers to the map
function getRandomLatLng(map) {
    // get the boundaries of the map
    let bounds = map.getBounds();
    let southWest = bounds.getSouthWest();
    let northEast = bounds.getNorthEast();
    let lngSpan = northEast.lng - southWest.lng;
    let latSpan = northEast.lat - southWest.lat;

    let randomLng = Math.random() * lngSpan + southWest.lng;
    let randomLat = Math.random() * latSpan + southWest.lat;

    return [ randomLat, randomLng,];
}

// Layer group : a layer can consist of other layers
let randomMarkerGroup = L.markerClusterGroup();
for (let i = 0; i < 1000; i++) {
    L.marker(getRandomLatLng(map)).addTo(randomMarkerGroup);
}
randomMarkerGroup.addTo(map);

// Random circles
let randomCircleGroup = L.layerGroup();
for (let i = 0; i < 5; i++) {
    L.circle(getRandomLatLng(map),{
        'radius': 300,
        'color': 'orange'
    }).addTo(randomCircleGroup)
}

// randomCircleGroup.addTo(map);

// Green circles
let greenCircleGroup = L.layerGroup();
for (let i=0; i < 5; i++) {
    L.circle(getRandomLatLng(map),{
        'radius': 450,
        'color':'green'
    }).addTo(greenCircleGroup)
}
// greenCircleGroup.addTo(map);

// Red circles
let redCircleGroup = L.layerGroup();
for (let i = 0; i < 20; i++) {
    L.circle(getRandomLatLng(map),{
        'radius': 300,
        'color': 'red'
    }).addTo(redCircleGroup);
}

// base layers: at least one of them will be active, and only can be active
let baseLayers = {
    'Markers': randomMarkerGroup,
    'Orange': randomCircleGroup
}

// overlays are optional layers
// the user can choose not to not show any (show none)
// can also choose to show as many as they want
let overlays = {
    'Green': greenCircleGroup,
    'Red': redCircleGroup
}

// show the layer controls on the map
L.control.layers(baseLayers, overlays).addTo(map);

document.querySelector('#btnCircle').addEventListener('click',function(){
    // the map object has a function `hasLayer`
    // we can use to check if a layer is shown in the map
    // it will return true if that's the case
    if (map.hasLayer(greenCircleGroup)) {
        // if the green circle group is already in the map
        // hide it
        map.removeLayer(greenCircleGroup);
    } else {
        // if the green circle group is not shown on the map
        // then we add it to the map
        map.addLayer(greenCircleGroup);
    }
})