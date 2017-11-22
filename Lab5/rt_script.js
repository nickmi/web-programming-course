var start = new Date().getTime();
var totalTime = 0;
var attempts = 0;


function selectColor() {

    var colourArray = ["blue",
        "black",
        "red",
        "purple",
        "green",
        "beige",
        "navy",
        "teal",
        "aqua",
        "orange",
        "aliceblue",
        "aquamarine",
        "burlywood",
        "crimson",
        "deeppink",
        "khaki",
        "seagreen"];

    return colourArray[Math.floor(Math.random() * 16)]

}

function circleResize() {
    var Circlewidth = (Math.random() * 100) + 50;
    document.getElementById("shape").style.borderRadius = "50%";
    document.getElementById("shape").style.width = Circlewidth + "px";
    document.getElementById("shape").style.height = Circlewidth + "px";
    document.getElementById("shape").style.display = "block";

}


$(function () {


    circleResize();

    $("#shape").click(function () {

        for (i=0;i<1000;i++)
        {
            var width = window.innerWidth;
            var height = window.innerHeight;

            var RandLeft = 1 + Math.floor(Math.random() * (width - 60));
            var RandTop = 1 + Math.floor(Math.random() * (height - 300));

            $("#shape").animate({left: RandLeft + 'px'});
            $("#shape").animate({top: RandTop + 'px'});
            $("#shape").animate({borderRadius: "50%"});

            $("#shape").css({backgroundColor: selectColor()});
            circleResize();
            start = new Date().getTime();
            //attempts += 1
        }

    });

});


$("#shape").click(function () {
    var end = new Date().getTime();
    var timeTaken = (end - start) / 1000;
    totalTime += timeTaken;
    document.getElementById("timeTaken").innerHTML = timeTaken + "s";
    document.getElementById("totalTime").innerHTML = totalTime.toFixed(2) + "s";
    document.getElementById("attempts").innerHTML = attempts
    if (attempts < 10) {
        document.getElementById("gameOver").innerHTML += "<br>  " + totalTime.toFixed(2) + "sec.";
    }
    else {
        document.getElementById("gameOver").innerHTML += "<br>  " + totalTime.toFixed(2) + "sec.";
        document.getElementById("gameOver").style.display = "inline";
    }
});
