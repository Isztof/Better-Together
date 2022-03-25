//selectors for the input boxes
let firstNameInputBox = document.querySelector("#validationCustom01");
let lastNameInputBox = document.querySelector("#validationCustom02");
let userNameInputBox = document.querySelector("#validationCustomUsername");
let emailInputBox = document.querySelector("#validationCustomEmail");
let passwordInputBox = document.querySelector("#psw");

//Boolean value that will be set to false if a form is not validated
var createUserAccount = true;

//  JavaScript for disabling form submissions if there are invalid fields
(function () {
  "use strict";

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll(".needs-validation");

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener(
      "submit",
      function (event) {
        // reset createUserAccount value every time the form is submitted
        createUserAccount = true;
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
          createUserAccount = false; // disable the creation of a new user accout if a value inside a input field is invalid
        }
        form.classList.add("was-validated");
      },
      false
    );
  });
})();

// Fetch the password forms we want to aplly special validation styles

var pswForms = document.querySelector("#psw");
var pswForms2 = document.querySelector("#psw2");

// password validation

var myInput = document.getElementById("psw");
var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var length = document.getElementById("length");
var myInput2 = document.getElementById("psw2");

// When the user clicks on the password field, show the message box
myInput.onfocus = function () {
  document.getElementById("message").style.display = "block";
};

// When the user clicks outside of the password field, hide the message box
myInput.onblur = function () {
  document.getElementById("message").style.display = "none";
};

// When the user starts to type something inside the password field
myInput.onkeyup = function () {
  // Validate lowercase letters
  var lowerCaseLetters = /[a-z]/g;
  if (myInput.value.match(lowerCaseLetters)) {
    letter.classList.remove("invalid");
    letter.classList.add("valid");
  } else {
    letter.classList.remove("valid");
    letter.classList.add("invalid");
  }

  // Validate capital letters
  var upperCaseLetters = /[A-Z]/g;
  if (myInput.value.match(upperCaseLetters)) {
    capital.classList.remove("invalid");
    capital.classList.add("valid");
  } else {
    capital.classList.remove("valid");
    capital.classList.add("invalid");
  }

  // Validate numbers
  var numbers = /[0-9]/g;
  if (myInput.value.match(numbers)) {
    number.classList.remove("invalid");
    number.classList.add("valid");
  } else {
    number.classList.remove("valid");
    number.classList.add("invalid");
  }

  // Validate length
  if (myInput.value.length >= 8) {
    length.classList.remove("invalid");
    length.classList.add("valid");
  } else {
    length.classList.remove("valid");
    length.classList.add("invalid");
  }
};

// validate consistency
myInput2.onkeyup = function () {
  if (myInput.value !== myInput2.value) {
    document.getElementById("consistency").style.display = "block";
  } else {
    document.getElementById("consistency").style.display = "none";
  }
};

function createNewUserAccount(event) {
  console.log(createUserAccount);
  event.preventDefault();
  event.stopPropagation();
  if (createUserAccount) {
    //Get value of the input fields
    let firstNameValue = firstNameInputBox.value;
    let lastNameValue = lastNameInputBox.value;
    let userNameValue = userNameInputBox.value;
    let emailValue = emailInputBox.value;
    let passwordValue = passwordInputBox.value;

    //Create an array out of the values an array
    const userObject = [
      {
        email: emailValue,
        password: passwordValue,
        firs_name: firstNameValue,
        display_name: userNameValue,
        last_name: lastNameValue,
      },
    ];

    //Create a new user account in supabase
    fetch("../.netlify/functions/user_profile", {
      method: "POST",
      // body: JSON.stringify(userObject),
      headers: new Headers({
        "Content-Type": "application/json",
      }),
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        alert(
          "You've been successfully registered. You can now log in your new account"
        );
        redirectToLogin();
      })
      .catch((error) => console.error(error));
  } else {
    console.log("invalid user data");
  }
}
//Select the form
const entireForm = document.querySelector(".needs-validation");

entireForm.addEventListener("submit", createNewUserAccount);

console.log(createUserAccount);

function redirectToLogin() {
  window.location.href = "/login/login.html";
}
