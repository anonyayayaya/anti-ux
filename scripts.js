var precincts = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
var precinct_found = true;
var precinct_avail;

function checkRegistrationCode() {
    var registrationcode = document.getElementById("registrationCodeInput").value;
    if (registrationcode == '9jsl09AFJ4%^olr2')
        document.write("Oops, that's not a valid registration code. Please try again and make sure you can differentiate your capital i's and lowercase l's.");
    else if (registrationcode == '9jsI09AFJ4%^oIr2')
        document.write("Oops, that's not a valid registration code. Please try again and make sure you can differentiate your capital i's and lowercase l's.");
    else if (registrationcode == '9jsI09AFJ4%^olr2')
        document.write("Oops, that's not a valid registration code. Please try again and make sure you can differentiate your capital i's and lowercase l's.");
    else if (registrationcode != '9jsl09AFJ4%^oIr2')
        document.write("Oops, that's not a valid registration code. Please try again");
    else
        window.location.href = './choosefavactivity.html';
}
function buzzfeedredirect(direction) {
    if (direction == 'next')
        window.location.href = './selectprecinct.html';
    else if (direction == 'back')
        window.location.href = './bannerads.html';
}

function precinctClick(num) {
    const index = precincts.indexOf(num);
    var len = precincts.length;
    console.log(len);

    if ((index > -1) && (len == 1)) {
        precincts.splice(index, 1);
        precinct_avail = num;
    }
    else if ((index > -1))
        precincts.splice(index, 1);
    if ((len <= 1) && (precinct_avail == num)) {
        if (confirm('This precinct is not full. Do you want to look for another location?')) {
            console.log('do nothing');
        }
        else
            window.location.href = './finalform.html';
    }
    else   
        alert("Sorry, this precinct is full. Please choose another location.");
}

function submitFinalQuiz1() {
    let formValid = true;
    if (!(document.getElementById("q1t").checked) && (document.getElementById("q1f").checked)) {
        alert("Sorry, that's not right. Please select the right answers according to the information provided in the previous page. You must show that you're well informed to vote before registration is complete. Remember that you can vote before election day.");
        formValid = false;
    }
    if (!document.getElementById("q2t1").checked) {
        alert("Sorry, that's not right. Please select the right answers according to the information provided in the previous page. You must show that you're well informed to vote before registration is complete.");
        formValid = false;
    }
    if (!document.getElementById("q2t2").checked) {
        alert("Sorry, that's not right. Please select the right answers according to the information provided in the previous page. You must show that you're well informed to vote before registration is complete. Remember that only student IDs issued by any institution of higher education located in any state or territory of the United States are valid.");
        formValid = false;
    }
    if (document.getElementById("q2f1").checked) {
        alert("Sorry, that's not right. Please select the right answers according to the information provided in the previous page. You must show that you're well informed to vote before registration is complete.");
        formValid = false;
    }
    if (document.getElementById("q2f2").checked) {
        alert("Sorry, that's not right. Please select the right answers according to the information provided in the previous page. You must show that you're well informed to vote before registration is complete.");
        formValid = false;
    }
    if (document.getElementById("q2f3").checked) {
        alert("Sorry, that's not right. Please select the right answers according to the information provided in the previous page. You must show that you're well informed to vote before registration is complete. Remember that electricity and water statements are examples of utility bills.");
        formValid = false;
    }
    if (document.getElementById("q2f4").checked) {
        alert("Sorry, that's not right. Please select the right answers according to the information provided in the previous page. You must show that you're well informed to vote before registration is complete.");
        formValid = false;
    }
    if (document.getElementById("q2f5").checked) {
        alert("Sorry, that's not right. Please select the right answers according to the information provided in the previous page. You must show that you're well informed to vote before registration is complete.");
        formValid = false;
    }
    if (document.getElementById("q2f6").checked) {
        alert("Sorry, that's not right. Please select the right answers according to the information provided in the previous page. You must show that you're well informed to vote before registration is complete. Remember that a valid state driver's license is an acceptable form of identification.");
        formValid = false;
    }
    if (formValid == true) {
        window.location.href = './finalquiz2.html';
    }
}

function submitFinalQuiz2() {
    let formValid = true;
    if (!(document.getElementById("q1t").checked)) {
        formValid = false;
    }
    if (!(document.getElementById("q1t").checked) && (document.getElementById("q1f").checked)) {
        formValid = false;
        alert("Sorry, that's not right. If you don't bring your ID, you will be asked to sign a statement that you are the registered voter you claim to be.");
    }
    if (formValid == true) {
        alert("That's right! If you don't bring your ID, you will be asked to sign a statement that you are the registered voter you claim to be.");
        window.location.href = './finalquiz3.html';
    }
}

function submitFinalQuiz3() {
    let formValid = true;
    let sign = document.getElementById("sign").value.trim().toLowerCase();
    let statement = document.getElementById("statement").value.trim().toLowerCase();
    let registered = document.getElementById("registered").value.trim().toLowerCase();
    let noon = document.getElementById("noon").value.trim().toLowerCase();
    let friday = document.getElementById("Friday").value.trim().toLowerCase();

    if (sign != "sign") {
        formValid = false;
        alert("Please fill out the fields accurately and exactly.");
    }
    if (statement != "statement") {
        formValid = false;
        alert("Please fill out the fields accurately and exactly.");
    }
    if (registered != "registered") {
        formValid = false;
        alert("Please fill out the fields accurately and exactly.");
    }
    if (noon != "noon") {
        formValid = false;
        alert("Please fill out the fields accurately and exactly.");
    }
    if (friday != "friday") {
        formValid = false;
        alert("Please fill out the fields accurately and exactly.");
    }
    if (formValid == true) {
        window.location.href = './finalquiz4.html';
    }
}

function submitFinalQuiz4() {
    let formValid = true;
    if (!(document.getElementById("sept18").value == '2020-09-18')) {
        formValid = false;
        alert("Sorry, that's not right.");
    }
    if (!(document.getElementById("oct31").value == '2020-10-31')) {
        formValid = false;
        alert("Sorry, that's not right.");
    }
    if (formValid == true) {
        window.location.href = './done.html';
    }
}

function submitFinalForm() {
    let formValid = true;
    if (document.forms["finalForm"]["prothomnam"].value.length == 0) {
        document.getElementById("finalFormErrors").innerHTML = "Please fill out the missing input.";
        formValid = false;
    } if (document.forms["finalForm"]["babarnam"].value.length == 0) {
        document.getElementById("finalFormErrors").innerHTML = "Please fill out the missing input.";
        formValid = false;
    } if (document.forms["finalForm"]["cheethee"].value.length == 0) {
        document.getElementById("finalFormErrors").innerHTML = "Please fill out the missing input.";
        formValid = false;
    } if (document.forms["finalForm"]["pon"].value.length == 0) {
        document.getElementById("finalFormErrors").innerHTML = "Please fill out the missing input.";
        formValid = false;
    } if (document.forms["finalForm"]["rasta"].value.length == 0) {
        document.getElementById("finalFormErrors").innerHTML = "Please fill out the missing input.";
        formValid = false;
    } if (document.forms["finalForm"]["shohor"].value.length == 0) {
        document.getElementById("finalFormErrors").innerHTML = "Please fill out the missing input.";
        formValid = false;
    } if (document.forms["finalForm"]["mechele"].value != "male" && document.forms["finalForm"]["mechele"].value != "Male" && document.forms["finalForm"]["mechele"].value != "female" && document.forms["finalForm"]["mechele"].value != "Female") {
        document.getElementById("finalFormErrors").innerHTML = 'Please only enter either "male" or "female" (without the quotes) for the gender question.';
        formValid = false;
    } if (document.forms["finalForm"]["mentally_incompetent"].value != "no" && document.forms["finalForm"]["mentally_incompetent"].value != "No") {
        document.getElementById("finalFormErrors").innerHTML = 'Please correctly answer only "yes" or "no" (no single or double quotes) to the mental competency question.';
        formValid = false;
    } if (document.forms["finalForm"]["etats"].value != "VA") {
        document.getElementById("finalFormErrors").innerHTML = "Sorry, " + document.forms["finalForm"]["etats"].value + " citizens are not eligible to vote in the Virginia primaries.";
        formValid = false;
    } if (document.forms["finalForm"]["desh"].value != 'US') {
        document.getElementById("finalFormErrors").innerHTML = "Sorry, " + document.forms["finalForm"]["desh"].value  + " citizens are not eligible to vote in the US.";
        formValid = false;
    } if (!document.forms["finalForm"]["cheethee"].value.includes("@")) {
        document.getElementById("finalFormErrors").innerHTML = "Please enter a valid email.";
        formValid = false;
    } if (!document.forms["finalForm"]["cheethee"].value.includes(".com") && !document.forms["finalForm"]["cheethee"].value.includes(".edu")) {
        document.getElementById("finalFormErrors").innerHTML = "Please enter a valid email.";
        formValid = false;
    } if (isNaN(document.forms["finalForm"]["pon"].value) == true) {
        document.getElementById("finalFormErrors").innerHTML = "Please enter only digits for your phone number.";
        formValid = false;
    } if (!document.forms["finalForm"]["pon"].value.length == 10) {
        document.getElementById("finalFormErrors").innerHTML = "Please enter your US phone number.";
        formValid = false;
    }

    if (formValid) {
        window.location.href = './details.html';
    }

}