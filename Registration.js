// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  "use strict";

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll(".needs-validation");

  // Fetch the password forms we ant to aplly special validation styles

  var pswForms = document.querySelector("#psw");
  var pswForms2 = document.querySelector("#psw2");

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener(
      "submit",
      function (event) {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
})();

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

//create a new user account in supabase
const registerButton = document.querySelector("#postB");

//selectors for the input boxes
let firstNameInputBox = document.querySelector("#validationCustom01");
let lastNameInputBox = document.querySelector("#validationCustom02");
let userNameInputBox = document.querySelector("#validationCustomUsername");
let emailInputBox = document.querySelector("#validationCustomEmail");
let passwordInputBox = document.querySelector("#psw");

//fetch the serverless function to save the values in the database
registerButton.addEventListener("submit", function () {
  //get value of the Input boxes

  let firstNameValue = firstNameInputBox.value;
  let lastNameValue = lastNameInputBox.value;
  let userNameValue = userNameInputBox.value;
  let emailValue = emailInputBox.value;
  let passwordValue = passwordInputBox.value;

  //create out of the values an array

  const userObject = {
    display_name: userNameValue,
    first_name: firstNameValue,
    last_name: lastNameValue,
    email: emailValue,
    password: passwordValue,
  };

  fetch("../.netlify/functions/user_profile", {
    method: "POST",
    body: JSON.stringify(userObject),
    headers: new Headers({
      "Content-Type": "application/json",
    }),
  })
    .then((response) => response.json())
    .then((json) => console.log(json))
    .catch((error) => console.error(error));
});
