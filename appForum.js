console.log("Hello Word");
//Global Selectors
const main = document.querySelector("main");
const postB = document.querySelector("#postB");
var postTitleInput = document.querySelector("#title");
var postDescriptionInput = document.querySelector("#comment");
const commentB = document.querySelector(".commentBtn");
const addComB = document.querySelector(".commentLine button");

var commentsSection = document.querySelector(".comments");

var id = 0;

// open the panel function
function showPanel(element) {
  // alert("I work");

  console.log(element.parentElement);
  let panel = document.querySelector(`#${element} .panel`);
  console.log(panel);
  panel.className = "panel";
  if (panel.style.display === "block") {
    panel.style.display = "none";
  } else {
    panel.style.display = "block";
  }
}

var comInput = document.querySelector(".areaT");

// adding new comments to the comment panel

function addComment() {
  //alert("I work!");
  var comment = document.createElement("div");
  comment.className = "comment";
  let inputValue = comInput.value;
  // var t = document.createTextNode(inputValue);
  // comment.appendChild(t);
  comment.innerHTML = `
        <span class="wide"><img class="picture" src="imgs/50x50picture.png"> <span class="commentAuthor">Mike Miller </span> </span>
        <div class="commentText"> ${inputValue} </div> 

      `;
  /*
      let comText = document.querySelector(".commentText");
      comText.appendChild(t);
      */
  if (inputValue === "") {
    alert("You cannot post an empty comment!");
  } else {
    var commentsSection = document.querySelector(".comments");
    commentsSection.appendChild(comment);
  }
}

// Adding a new post function
function addingPost() {
  let postTitle = postTitleInput.value;
  let postDescription = postDescriptionInput.value;
  let frame = document.createElement("div");
  frame.className = "frame";
  frame.id = `post${id}`;
  frame.innerHTML = ` 

    <div class="authorDateTag">
    <img class="picture" src="imgs/50x50picture.png" alt="">
    <!-- <div class="picture" ></div> -->
     <div class="authorTag">John Doe</div>
     <div class="dateTag">27.01.2021 21:49</div>
     <h4 class="noteTitle" > ${postTitle}</h4> 
   </div>
  
     <div class="noteDescription"> ${postDescription} </div>
    <div class="postBtns">
       <button onclick="showPanel('${`post${id}`}')"  class="commentBtn"> Comment</button> 
       
       <button class="repButton">Report</button> 
   </div>
    `;
  console.log(postTitle);
  id++;
  if (postTitle === "") {
    alert("Your Post has to have a Title!");
  } else if (postDescription === "") {
    alert("Your post has to have a Description!");
  } else {
    main.appendChild(frame);
    //titleHtml.innerHTML = postTitle;
  }
  // Comments section

  // comment panel
  /*
    comPanel = document.createElement("div");
    panel.className = "panel";
    frame.appendChild(comPanel);
    */

  //
  comPanel = document.createElement("div");
  comPanel.className = "panel";
  frame.appendChild(comPanel);
  let commentS = document.createElement("div");
  commentS.className = "comments";
  comPanel.appendChild(commentS);
  comPanel.innerHTML = `
  <div class="comments"> </div> 
   <span class="commentLine">  <textarea class="areaT" placeholder="Type in your comment"></textarea><button type="submit" onclick="addComment()"  class="btn btn-info btn-sm shadow-none text-left" >Comment</button> </span>
   `;

  // commentB.addEventListener("click", showPanel);
  //  addComB.addEventListener("click", addComment);
}

//const frame = document.querySelector(".frame");

// appending the adding new post function to a button

postB.addEventListener("click", addingPost);

// comment input resizer
/*
const textArea = document.querySelector(".areaT");
textArea.addEventListener("keyup", e =>{
  let scHeight = e.target.scrollHeight;
  console.log(scHeight);
  textArea.style.height = `${scHeight}px`
});
*/
