
mapboxgl.accessToken = mapToken;

const map = new mapboxgl.Map({
        container: 'map', // container ID
        style : 'mapbox://styles/mapbox/streets-v12',
        center: coordinates, // starting position [lng, lat]. Note that lat must be set between -90 and 90
        zoom: 7 // starting zoom
    });

const marker = new mapboxgl.Marker({color : '#fe424d'})
.setLngLat(coordinates) //listing.geometry.coordinates
.setPopup(new mapboxgl.Popup({offset:25})
.setHTML('<h1> hello world </h1>'))
.addTo(map)