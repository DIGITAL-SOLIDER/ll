var latitude1 = 27.1751
var longitude1 = 78.0421

mapboxgl.accessToken = "pk.eyJ1IjoidmlkeXV0c2hhaCIsImEiOiJjbGF1c21xcmUwOWFlM3VtdDJuM2g1Yml0In0.UXRq0dmQRPGzaTomjaUrrQ"

var map = new mapboxgl.Map({
    container:"map",
    zoom:16,
    center:[longitude1,latitude1],
    style:"mapbox://styles/mapbox/navigation-night-v1"
})

map.addControl(
    new mapboxgl.GeolocateControl({
        positionOptions:{
            enableHighAccuracy:true
        },
        trackUserLocation:true
    })
)

map.addControl(
    new MapboxDirections({
        accessToken:mapboxgl.accessToken
    }),
    'bottom-left'
)


var latitude2 = 22.5542
var longitude2 = 88.3359

mapboxgl2.accessToken = "pk.eyJ1IjoidmlkeXV0c2hhaCIsImEiOiJjbGF1c21xcmUwOWFlM3VtdDJuM2g1Yml0In0.UXRq0dmQRPGzaTomjaUrrQ"

var map2 = new mapboxgl2.Map({
    container:"map",
    zoom:16,
    center:[longitude2,latitude2],
    style:"mapbox://styles/mapbox/navigation-night-v1"
})

map.addControl(
    new mapboxgl.GeolocateControl({
        positionOptions:{
            enableHighAccuracy:true
        },
        trackUserLocation:true
    })
)


var latitude3 = 21.8380
var longitude3 = 73.7191

mapboxgl3.accessToken = "pk.eyJ1IjoidmlkeXV0c2hhaCIsImEiOiJjbGF1c21xcmUwOWFlM3VtdDJuM2g1Yml0In0.UXRq0dmQRPGzaTomjaUrrQ"

var map3 = new mapboxgl3.Map({
    container:"map",
    zoom:16,
    center:[longitude3,latitude3],
    style:"mapbox://styles/mapbox/navigation-night-v1"
})

map.addControl(
    new mapboxgl.GeolocateControl({
        positionOptions:{
            enableHighAccuracy:true
        },
        trackUserLocation:true
    })
)