function checkForm() {

    var x = document.getElementById("form1").elements;

    if( checkName(x)==true & checkAdress(x)==true & checkPhoneAndMail(x)==true & checkAmAndYear(x)==true ){

        document.getElementById("form_container_2").style.display = "block";
        hideForm2();

    }
}





function hideForm() {

    document.getElementById("form_container_2").style.display = "none";
    document.getElementById("errName1").style.display = "none";
    document.getElementById("errAddress1").style.display = "none";
    document.getElementById("errAddress2").style.display = "none";
    document.getElementById("errContact1").style.display = "none";
    document.getElementById("errContact2").style.display = "none";
    document.getElementById("errContact3").style.display = "none";
    document.getElementById("errEtosSpoudon").style.display = "none";
    document.getElementById("errAM1").style.display = "none";
    document.getElementById("errAM2").style.display = "none";


}

function hideForm2() {

    document.getElementById("errCertificate1").style.display = "none";
    document.getElementById("errCertificate2").style.display = "none";
}

function validateEmail(inputText) {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (inputText.match(mailformat)) {

        return true;
    }
    else {
        return false;
    }
}


function validatePhoneNumber(inputtxt) {
    var phoneno = /^\d{10}$/;
    if ((inputtxt.match(phoneno))) {
        return true;
    }
    else {

        return false;
    }
}


function validatePostalCode(inputtxt) {
    var phoneno = /^\d{5}$/;
    if ((inputtxt.match(phoneno))) {
        return true;
    }
    else {

        return false;
    }
}


function validateAM(inputtxt) {
    var phoneno = /^\d{6}$/;
    if ((inputtxt.match(phoneno))) {
        return true;
    }
    else {

        return false;
    }
}

function checkForm2() {

    var x = document.getElementById("form1").elements;


    if (x[9].value == -1) {


        document.getElementById("errCertificate1").style.display = "block";

    }

    if (x[10].value == -1) {

        document.getElementById("errCertificate2").style.display = "block";
    }

}
function checkName(x) {

    if (x[0].value == "" || x[1].value == "") {


        document.getElementById("errName1").style.display = "block";
        return false;

    }
else return true;

}
function checkAdress(x) {


    if ((x[2].value == "" || x[3].value == "" || [4].value == "") === true) {


        document.getElementById("errAddress1").style.display = "block";

        if (validatePostalCode(x[4].value) == false) {

            document.getElementById("errAddress2").style.display = "block";


        }

        return false;
    }


    if (validatePostalCode(x[4].value) == false) {

        document.getElementById("errAddress2").style.display = "block";

        return false;
    }
    else return true;


}
function checkPhoneAndMail(x) {


    if (x[5].value == "" || x[6].value == "") {

        document.getElementById("errContact1").style.display = "block";


        if (validateEmail(x[6].value) == false) {

            document.getElementById("errContact3").style.display = "block";


        }


        if (validatePhoneNumber(x[5].value) == false) {

            document.getElementById("errContact2").style.display = "block";


        }
        return false;
    }


    if (validateEmail(x[6].value) == false) {

        document.getElementById("errContact3").style.display = "block";

        return false;
    }


    if (validatePhoneNumber(x[5].value) == false) {

        document.getElementById("errContact2").style.display = "block";

        return false;

    }

    else return true;


}
function checkAmAndYear(x) {


    if (x[7].value == -1) {
        document.getElementById("errEtosSpoudon").style.display = "block";
        return false;
    }


    if (x[8].value == "") {
        document.getElementById("errAM1").style.display = "block";
        return false;

    }


    if (validateAM(x[8].value) == false) {

        document.getElementById("errAM2").style.display = "block";
        return false;
    }
        else return true;

}