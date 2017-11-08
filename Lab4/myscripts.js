
function checkForm() {





    var x = document.getElementById("form1").elements;


    checkName(x);
 // checkAdress(x);
    checkPhoneAndMail(x);
   // checkAmAndYear(x);









    // if (flag === true) {
    //
    //     document.getElementById("form_container_2").style.display = "block";
    //     hideForm2();
    //
    //
    // }


}


function checkForm2(){

    var x = document.getElementById("form1").elements;




    if (x[9].value === -1) {


        document.getElementById("errCertificate1").style.display = "block";


    }


    if (x[10].value===-1){

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

function ValidateEmail(inputText)
{
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(inputText.match(mailformat))
    {

        return true;
    }
    else
    {
        alert("You have entered an invalid email address!");
        return false;
    }
}


function phonenumber(inputtxt)
{
    var phoneno = /^\d{10}$/;
    if((inputtxt.match(phoneno)))
    {
        return true;
    }
    else
    {

        return false;
    }
}

function validatePostalCode(phone) {
    var re=phone.match(/^\d{5}$/);
    return re;
}


function validateAM(am) {
    var re=am.match(/^(\d{6},)*\d{6}$/);

    return re;
}


function checkName(x){

    if (x[0].value == "" || x[1].value == "") {


        document.getElementById("errName1").style.display = "block";
        flag = false

    }




}

function checkAdress(x){




    if ((x[2].value == "" || x[3].value == "" || [4].value == "") === true) {


        document.getElementById("errAddress1").style.display = "block";

        if(validatePostalCode([4].value)==false){

            document.getElementById("errAddress2").style.display = "block";


        }
    }













}

function checkPhoneAndMail(x){



alert(x[6].value)

    if (x[5].value == "" || x[6].value == "") {

        document.getElementById("errContact1").style.display = "block";


        if (ValidateEmail(x[6].value) == false) {

            document.getElementById("errContact3").style.display = "block";


        }


        if (phonenumber(x[5].value) == false) {

            document.getElementById("errContact2").style.display = "block";


        }


    }


    if (ValidateEmail(x[6].value) == false) {

        document.getElementById("errContact3").style.display = "block";


    }




    if (phonenumber(x[5].value) == false) {

        document.getElementById("errContact2").style.display = "block";


    }



    }













function checkAmAndYear(x){



alert(x[8].value);

    if (x[7].value == -1) {
        document.getElementById("errEtosSpoudon").style.display = "block";
    }



        if (x[8].value == "") {
            document.getElementById("errAM1").style.display = "block";

        }


    if (validateAM(x[8].value) == false) {

        document.getElementById("errAM2").style.display = "block";

    }


}