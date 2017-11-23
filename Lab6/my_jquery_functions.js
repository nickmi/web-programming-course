

var currentID=1;

var id;


function enableTxt(elem) {
     id = $(elem).attr("id");

}


$(function () {





    $("#edu").click(function(){

        var concId="education"+currentID;
        var concId2="educationFinal"+currentID;



        $("#form1").append("<div class=\"form-group\">\n" +
            "    <label for="+concId+">Education</label>\n" +
            "    <textarea class=\"form-control\" id="+concId+" rows=\"3\" onclick=\"enableTxt(this)\"></textarea>\n" +
            "  </div>");


        $("#afd").append("<div class=\"form-group\">\n" +
            "            <label for="+concId2+">Education:</label>\n" +
            "            <div id="+concId2+" ></div>\n" +
            "        </div>")


        currentID++;

    });


    $("#jobExp").click(function(){

        var jober="jobExp"+currentID;
        var jober2="jobExp2"+currentID;


        $("#form1").append("<div class=\"form-group\">\n" +
            "    <label for="+jober+">Job Experience:</label>\n" +
            "    <textarea class=\"form-control\" id="+jober+" rows=\"3\" onclick=\"enableTxt(this)\"></textarea>\n" +
            "  </div>");


        $("#afd").append("<div class=\"form-group\">\n" +
            "            <label for="+jober2+">Job Experience:</label>\n" +
            "            <div id="+jober2+"></div>\n" +
            "        </div>")

        currentID++;


    });


    $('#Firstname').on("change paste keyup", function() {
        var k = $('#Firstname').val();
        $('#Firstname2').text(k);

    });

    $('#lastname').on("change paste keyup", function() {
        var k = $('#lastname').val();
        $('#lastname2').text(k);

    });

    $('#Profession').on("change paste keyup", function() {
        var k = $('#Profession').val();
        $('#Profession2').text(k);

    });


    $('#livinglocation').on("change paste keyup", function() {
        var k = $('#livinglocation').val();
        $('#livinglocation2').text(k);

    });


    $('#email').on("change paste keyup", function() {
        var k = $('#email').val();
        $('#email2').text(k);

    });

    $('#phone').on("change paste keyup", function() {
        var k = $('#phone').val();
        $('#phone2').text(k);

    });



    $(document).on('click','.form-group', function(){


          //Sigoura tha yparxei kaliteros tropos alla whatever

        $('#'+id).on("change paste keyup", function() {

            var k = $('#'+id).val();
            var part1=id.substr(0,6);
            var part2=part1+"2"+id.substr(6,7);
            //alert(part2);
            $('#'+part2).text(k);});




        $('#'+id).on("change paste keyup", function() {

            var k = $('#'+id).val();
            var part1=id.substr(0,9);
            var part2=part1+"Final"+id.substr(9,10);

            $('#'+part2).text(k);

        });
    })



});


