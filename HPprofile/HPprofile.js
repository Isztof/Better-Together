// Click on a close button to hide the current list item
// I think the myExperience tabs are not deleted becaus you don't select them here
console.log(close);

console.log("close" + close);
console.log(close.length);

var close;

//Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  if (inputValue === "") {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  close = document.querySelectorAll(".close");

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      var div = this.parentElement;
      div.style.display = "none";
    };
  }

  console.log(close);
}

const addEducationButton = document.querySelector("#addEducation");

var close2;
function newElement2() {
  var li = document.createElement("li");
  var inputValue2 = document.getElementById("myInput2").value; //
  //console.log(inputValue);
  var t = document.createTextNode(inputValue2);
  li.appendChild(t);
  if (inputValue2 === "") {
    alert("You must write something!");
  } else {
    document.getElementById("myUL2").appendChild(li);
  }
  document.getElementById("myInput2").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  close = document.querySelectorAll(".close");
  console.log(close);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      var div = this.parentElement;
      div.style.display = "none";
    };
  }
}

addEducationButton.addEventListener("click", newElement2);

const addCertificationButton = document.querySelector("#addCertification");

function newElement3() {
  var li = document.createElement("li");
  var inputValue3 = document.querySelector("#myInput3").value;
  var t = document.createTextNode(inputValue3);
  li.appendChild(t);
  if (inputValue3 === "") {
    alert("You must write something!");
  } else {
    document.getElementById("myUL3").appendChild(li);
  }
  document.getElementById("myInput3").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  close = document.querySelectorAll(".close");

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      var div = this.parentElement;
      div.style.display = "none";
    };
  }
}

addCertificationButton.addEventListener("click", newElement3);
