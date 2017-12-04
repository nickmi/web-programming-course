var gpsCords;

$(function() {
    doCookiesExist();

    try {
        getLocation();
    } catch (error) {
        alert("error");
    }



});

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        alert("hetyllo");
    }
}

function showPosition(position) {
    gpsCords = position.coords;
    alert(gpsCords.latitude)
    initMap(gpsCords)
    sendDataToPHP();
}


var map;

function initMap(gpsCords) {

    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: gpsCords.latitude, lng: gpsCords.longitude },
        zoom: 20

    });

    var marker = new google.maps.Marker({
        position: { lat: gpsCords.latitude, lng: gpsCords.longitude },
        map: map
    });
}

function callserver() {



    $.ajax({
        type: 'POST',
        data: {},
        url: 'id.php', // <=== CALL THE PHP FUNCTION HERE.
        success: function(data) {

            setId(data)
        },
        error: function(xhr) {
            alert("error");
        }
    });

}

function setId(data) {

    Cookies.set('name', data, { expires: 7 });
    $("#idLabel").text(Cookies.get('name'));
    //alert("this works" + data);

}


function doCookiesExist() {

    if (Cookies.get('name') === 'undefined') {

        alert("cookies dont exist");
        callserver();

    } else {

        $("#idLabel").append(Cookies.get('name'));
        alert("cookies Exist");


    }
}

$('#idgenerator').click(function() {
    generateNewID();
});

function generateNewID() {

    Cookies.remove('name');
    callserver();





}


function sendDataToPHP() {


    $.ajax({
        url: "db.php",
        type: "post", //can be post or get
        data: {
            id: Cookies.get('name'),
            lat: gpsCords.latitude,
            long: gpsCords.longitude

        },
        success: function() {

        }
    });
}


$('#addUser').click(function() {



});


function addNewUser() {









}