// console.log(post.coordinates);
mapboxgl.accessToken = 'pk.eyJ1IjoiemltemFteW95b21hbiIsImEiOiJjazZ0Ymt6OW0wMGZpM21tbnkwcjAycWxmIn0.1tBwLPpT-4b6W4KgfxjHBA';

var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/light-v10',
    center: post.coordinates, //80,22 for India
    zoom: 10
});

// create a HTML element for post location/marker
var el = document.createElement('div');
el.className = 'marker';

// make a marker for our location and add to the map
new mapboxgl.Marker(el)
    .setLngLat(post.coordinates)
    .setPopup(new mapboxgl.Popup({ offset: 25 }) // add popups
        .setHTML('<h3>' + post.title + '</h3><p>' + post.location + '</p>'))
    .addTo(map);
