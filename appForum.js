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
  let panel = document.querySelector(`#${element} .panel`);
  console.log(panel);
  panel.className = "panel";
  if (panel.style.display === "block") {
    panel.style.display = "none";
  } else {
    panel.style.display = "block";
  }
}

// adding new comments to the comment panel
function addComment(element) {
  //alert("I work!");
  var comment = document.createElement("div");
  comment.className = "comment";
  var comInput = document.querySelector(`#${element} .areaT`);
  console.log(element);
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
    var commentsSection = document.querySelector(`#${element} .comments`);
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
       <form action="reportPost/reportPost.html">
         <button class="repButton">Report</button> 
       </form>   
   </div>
    `;
  console.log(postTitle);
  if (postTitle === "") {
    alert("Your Post has to have a Title!");
  } else if (postDescription === "") {
    alert("Your post has to have a Description!");
  } else {
    main.appendChild(frame);
  }
  // Comments section

  comPanel = document.createElement("div");
  comPanel.className = "panel";
  frame.appendChild(comPanel);
  let commentS = document.createElement("div");
  commentS.className = "comments";
  comPanel.appendChild(commentS);
  comPanel.innerHTML = `
  <div class="comments"> </div> 
   <span class="commentLine">  <textarea id="'${`post${id}`}' " onfocus="resizerSelector('${`post${id}`}')" class="areaT" placeholder="Type in your comment"></textarea><button type="submit" onclick="addComment('${`post${id}`}')"  class="btn btn-info btn-sm shadow-none text-left" >Comment</button> </span>
   `;
  id++;

  // commentB.addEventListener("click", showPanel);
  //  addComB.addEventListener("click", addComment);
}

// appending the adding new post function to a button

postB.addEventListener("click", addingPost);

// comment input resizer

function resizerSelector(element) {
  var textArea = document.querySelector(`#${element} .areaT`);
  textAreaTBR = textArea;

  textAreaTBR.addEventListener("keyup", (e) => {
    let scHeight = e.target.scrollHeight;
    console.log(scHeight);
    textArea.style.height = `${scHeight}px`;
  });
}
