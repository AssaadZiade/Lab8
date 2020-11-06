let map;



$("#submit").on('click', function () {
    initMap(parseFloat($("#long").val()), parseFloat($("#lat").val()));
})

$("#current").on('click', function () {
    getLocation();
})

function initMap(longitutde, latitude) {
    const location = {
        lat: longitutde,
        lng: latitude
    };

    map = new google.maps.Map(document.getElementById("map"), {
        center: location,
        zoom: 8,
    });

    const marker = new google.maps.Marker({
        position: location,
        map: map
    });
}

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(geoSuccess, geoError);
    } else {
        alert("Geolocation is not supported by this browser.");
    }
}


function geoSuccess(position) {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    initMap(lng, lat);
}
    


function geoError() {
    alert("Geocoder failed.");
}let map;



$("#submit").on('click', function () {
    initMap(parseFloat($("#long").val()), parseFloat($("#lat").val()));
})

$("#current").on('click', function () {
    getLocation();
})

function initMap(longitutde, latitude) {
    const location = {
        lat: longitutde,
        lng: latitude
    };

    map = new google.maps.Map(document.getElementById("map"), {
        center: location,
        zoom: 8,
    });

    const marker = new google.maps.Marker({
        position: location,
        map: map
    });
}

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(geoSuccess, geoError);
    } else {
        alert("Geolocation is not supported by this browser.");
    }
}


function geoSuccess(position) {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    initMap(lng, lat);
}
    


function geoError() {
    alert("Geocoder failed.");
}
