/*Function that validates the form*/
/*JS variable is created and assigned name value the form + name value of input element*/
function validateForm() {
    let fullName = document.forms["regForm"]["firstName"];
    let address = document.forms["regForm"]["address"];
    let apartment = document.forms["regForm"]["apartment"];
    let city = document.forms["regForm"]["city"];
    let state = document.forms["regForm"]["state"];
    let zipCode = document.forms["regForm"]["ZipCode"];
    let email = document.forms["regForm"]["email"];
    let phone = document.forms["regForm"]["phone"];
    /*If input elements are left blank, alerts are activated*/
    /*If input elements are filled in, form is successfully submitted*/
    if (firstName.value == "") {
        alert("Please enter your first and last name. ");
        fullName.focus();
        return false;
    }

    if (address.value == "") {
        alert("Please enter your address. ");
        address.focus();
        return false;
    }

    if (city.value == "") {
        alert("Please enter your city. ");
        city.focus();
        return false;
    }

    if (state.value == "") {
        alert("Please enter your state. ");
        state.focus();
        return false;
    }

    if (zipCode.value == "") {
        alert("Please enter your zip code. ");
        zipCode.focus();
        return false;
    }

    if (email.value == "") {
        alert("Please enter your email address. ");
        email.focus();
        return false;
    }

    if (phone.value == "") {
        alert("Please enter your phone number. ");
        phone.focus();
        return false;
    }
}