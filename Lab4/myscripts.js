
function checkForm() {


    flag = true;


    var x = document.getElementById("form1").elements;


    if (x[0].value == "" || x[1].value == "") {


        document.getElementById("errName1").style.display = "block";
        flag = false

    }


    if ((x[2].value == "" || x[3].value == "" || [4].value == "") === true) {


        document.getElementById("errAddress1").style.display = "block";

       if(validatePostalCode([4].value)===false){

           document.getElementById("errAddress2").style.display = "block";
           flag = false;

       }


        flag = false;


    }


     if (x[5].value == "" || x[6].value == "") {

        document.getElementById("errContact1").style.display = "block";



        if(validateEmail(x[6].value)==false){

            document.getElementById("errContact3").style.display = "block";
            flag=false;


        }


        if(validatePhone(x[5].value)==false){

            document.getElementById("errContact2").style.display = "block";
            flag=false;

        }

        flag = false;

    }



    if (x[7].value == -1) {
        document.getElementById("errEtosSpoudon").style.display = "block";
        flag = false;

    }




    if (x[8].value === "") {
        document.getElementById("errAM1").style.display = "block";
        document.getElementById("errAM2").style.display = "block";

        flag = false;


    }


    if (flag == true) {

        document.getElementById("form_container_2").style.display = "block";
        hideForm2();


    }


}


function checkForm2(){

    var x = document.getElementById("form1").elements;




    if (x[9].value == -1) {


        document.getElementById("errCertificate1").style.display = "block";
        flag = false

    }


    if (x[10].value==-1){

        document.getElementById("errCertificate2").style.display = "block";

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

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

function validatePhone(phone) {
    var re=phone.match(/^\d{10}$/);
    return re.test(phone);
}

function validatePostalCode(phone) {
    var re=phone.match(/^\d{5}$/);
    return re.test(phone);
}


function validateAM(phone) {
    var re=phone.match(/^\d{6}$/);
    return re.test(phone);
}
