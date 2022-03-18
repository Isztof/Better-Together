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

async function login() {
  fetch("/.netlify/functions/getUserAccounts")
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
}
