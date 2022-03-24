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
        alert("You've been logged in successfully");
        window.open("/index.html");
        localStorage.setItem("getSessionStorage", display_name.value);
        console.log(display_name.value);
      } else {
        alert("Error Password or Username"); /*displays error message*/
      }
    })
    .catch((err) => {
      console.log(err);
    });
});
