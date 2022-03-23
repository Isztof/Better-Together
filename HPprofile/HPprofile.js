// Create a "close" button and append it to each list item
var myNodelist = document.querySelectorAll("#myUL li"); // you should not select all lis here but only those for which you want to aply
// the delete button. I recommend using the querySelector instead of getElementsby... See the documentation on the query selector
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}
// if you aply these changes this block of code should work

// Click on a close button to hide the current list item
// I think the myExperience tabs are not deleted becaus you don't select them here
console.log("close" + close); // By using the console log you can see what colums are you selecting so you can make sure that you are selecting the right
//ones. If this is not the case edit the selector so that you select the right elements

console.log(close.length);
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    var div = this.parentElement;
    div.style.display = "none";
    console.log("parent element:" + div);
  };
}
// We don't need it. To me this won't fit to the purpose of this feature
// Add a "checked" symbol when clicking on a list item
/*
  var list = document.querySelector('ul');
  list.addEventListener('click', function (ev) {
    if (ev.target.tagName === 'LI') {
      ev.target.classList.toggle('checked');
    }
  }, false);
  */

var close;

//Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === "") {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  close = document.querySelectorAll("#myUL .close");

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      var div = this.parentElement;
      div.style.display = "none";
    };
  }
}
close = document.querySelectorAll("#myUL .close");

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

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      var div = this.parentElement;
      div.style.display = "none";
    };
  }
}
