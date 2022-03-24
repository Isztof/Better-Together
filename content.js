// disable enable the display of the log out button
const logOutB = document.querySelector("#LO");

if (!localStorage.length) {
  logOutB.style.display = "none";
}

logOutB.addEventListener("click", function () {
  localStorage.clear();
  alert("You have been logged out successfully");
  logOutB.style.display = "none";
  logInB.style.display = "inline-block";
  regB.style.display = "inline-block";
});

// disable enable the display of the log in  and register button
const logInB = document.querySelector("#LI");
const regB = document.querySelector("#R");
console.log(logInB);

if (localStorage.length) {
  logInB.style.display = "none";
  regB.style.display = "none";
}
