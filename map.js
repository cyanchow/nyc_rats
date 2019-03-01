'use strict'

console.log('Loaded map.js')

mapboxgl.accessToken = 'pk.eyJ1IjoiY2hlbnlhbmNob3ciLCJhIjoiY2pzZ2J1MHd5MXE5ajQ0b2FwOThzdHR5MyJ9.k2PnYrBfOQrE_yYRnIzdMg'

let map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/chenyanchow/cjsgce88p39s11fnsdm1dp8z3',
    center: [-73.96216,40.80779],
    zoom: 14
})

let navigation = new mapboxgl.NavigationControl({
    showCompass: false
})
map.addControl(navigation, 'top-left')

let scale = new mapboxgl.ScaleControl({
    maxWidth: 80,
    unit: 'imperial'
})
map.addControl(scale, 'bottom-right')

let geolocate = new mapboxgl.GeolocateControl({
    positionOptions: {
        enableHighAccuracy: true
    },
    trackUserLocation: true,
    showUserLocation: true,
    fitBoundsOptions: {
    }
})
map.addControl(geolocate, 'top-left')

geolocate.on('geolocate', function(event) {

})