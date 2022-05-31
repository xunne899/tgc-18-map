function showSearchResult(result, map) {
    // create markers and put on map
    let lat = result.geocodes.main.latitude;
    let lng = result.geocodes.main.longitude;

    let marker = L.marker([lat, lng]).addTo(searchResultLayer);

    marker.bindPopup(`<h1>${result.name}</h1>
   <p>${result.location.address} 
   ${result.location.address_extended ? ", " + result.location.address_extended
            : ""}</p>`)

    // create the search result entry and display under the search
    let resultElement = document.createElement('div');
    resultElement.className="search-result";
    resultElement.innerHTML = result.name;
    resultElement.addEventListener('click', function(){
        map.flyTo([lat, lng], 16)
        marker.openPopup();
    })

    document.querySelector("#results").appendChild(resultElement);
}
