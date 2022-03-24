/*
const submitButton = document.querySelector("#post");
console.log(submitButton);
submitButton.addEventListener("click", function () {
  fetch("../.netlify/functions/getUserAccounts")
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      json.forEach((item) => {
        let userName = item.email;
        let password = item.password;
        let userNameInputBox = document.querySelector("#exampleInputEmail1");
        let passwordInputBox = document.querySelector("#exampleInputPassword1");
        console.log(userName == userNameInputBox.value);
        if (
          userName == userNameInputBox.value &&
          password == passwordInputBox.value
        ) {
          window.location =
            "https://bettter-together-net.netlify.app/index.html";
        } else {
          alert("Username or password is invalid");
        }
      });
    });
});
*/
/*
async function login() {
  fetch("/.netlify/functions/getUserAccounts")
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      json.forEach((item) => {
        let userName = item.display_name;
        let password = item.password;
        let userNameInputBox = document.querySelector("#exampleInputEmail1");
        let passwordInputBox = document.querySelector("#exampleInputPassword1");
        console.log(userName == userNameInputBox.value);
        if (
          userName == userNameInputBox.value &&
          password == passwordInputBox.value
        ) {
          window.open(
            "/index.html");
        } else {
          alert("Username or password is invalid");
        }
      });
    });
}
*/

const form = {
  email: document.querySelector("#exampleInputEmail1"),
  password: document.querySelector("#exampleInputPassword1"),
  submit: document.querySelector("#post"),
  messages: document.getElementById("form-messages"),
};

let userNameInputBox = document.querySelector("#exampleInputEmail1");
let passwordInputBox = document.querySelector("#exampleInputPassword1");
let display_name = document.querySelector("#exampleInputEmail1");

let button = form.submit.addEventListener("click", (e) => {
  e.preventDefault();
  const login = "https://bettter-together-net.netlify.app/login/login.html";

  var saveUserInWebStorage = false;

  fetch("/.netlify/functions/getUserAccounts", {
    method: "POST",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      display_name: form.email.value,
      password: form.password.value,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      if (data.length) {
        window.open("/index.html");

        sessionStorage.setItem("getSessionStorage", display_name.value);
        console.log(display_name.value);
        console.log(sessionStorage.getItem("getSessionStorage"));
        // transfers sessionStorage from one tab to another
        var sessionStorage_transfer = function (event) {
          if (!event) {
            event = window.event;
          } // ie suq
          if (!event.newValue) return; // do nothing if no value to work with
          if (event.key == "getSessionStorage") {
            // another tab asked for the sessionStorage -> send it
            localStorage.setItem(
              "sessionStorage",
              JSON.stringify(sessionStorage)
            );
            // the other tab should now have it, so we're done with it.
            localStorage.removeItem("sessionStorage"); // <- could do short timeout as well.
          } else if (event.key == "sessionStorage" && !sessionStorage.length) {
            // another tab sent data <- get it
            var data = JSON.parse(event.newValue);
            for (var key in data) {
              sessionStorage.setItem(key, data[key]);
            }
          }
        };

        // listen for changes to localStorage
        if (window.addEventListener) {
          window.addEventListener("storage", sessionStorage_transfer, false);
        } else {
          window.attachEvent("onstorage", sessionStorage_transfer);
        }

        // Ask other tabs for session storage (this is ONLY to trigger event)
        if (!sessionStorage.length) {
          localStorage.setItem("getSessionStorage", "foobar");
          localStorage.removeItem("getSessionStorage", "foobar");
        }
      } else {
        alert("Error Password or Username"); /*displays error message*/
      }
    })
    .catch((err) => {
      console.log(err);
    });
});
