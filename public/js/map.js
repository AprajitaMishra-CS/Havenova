const map = new mapboxgl.Map({
    accessToken: mapToken,
    container: 'map', // container ID
    style: "mapbox://styles/mapbox/streets-v12",
    center: listing.geometry.coordinates, // starting position [lng, lat]. Note that lat must be set between -90 and 90
    zoom: 9 // starting zoom
});

const marker = new mapboxgl.Marker({ color: "red" })
    .setLngLat(listing.geometry.coordinates)  //Listing.geometry.coordinates
    .setPopup(
        new mapboxgl.Popup({offset: 25}).setHTML(
            `<h4> ${listing.title} </h3><p>Exact Location will be provided afer booking</p>`
        )
    )
    .addTo(map);
