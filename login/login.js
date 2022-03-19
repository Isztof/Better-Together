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
let button = form.submit.addEventListener("click", (e) => {
  e.preventDefault();
  const login = "https://bettter-together-net.netlify.app/login/login.html";

  fetch("/.netlify/functions/getUserAccounts", {
    method: "POST",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: form.email.value,
      password: form.password.value,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      // code here //
      if (
        body.password === data.password
      ) {
        window.open(
          "/index.html");
      } else {
        alert("Username or password is invalid");
      }

    });
});


