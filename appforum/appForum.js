console.log("Hello Word")
//Global Selectors
const  main = document.querySelector('main');
const postB = document.querySelector("#postB");
var postTitleInput = document.querySelector("#title");
var postDescriptionInput = document.querySelector("#comment");
//var titleHtml = document.querySelector(".noteTitle");

// var postTitle = document.querySelector("#t").value;


// Adding a new post
function addingPost(){
  let postTitle = postTitleInput.value;
  let postDescription = postDescriptionInput.value; 
  let frame =  document.createElement("div");
    frame.className = "frame";
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
       <button  class="commentBtn"> Comment</button> 
       
       <button class="repButton">Report</button> 
   </div>
    `
    console.log(postTitle);
   // var textTitle = document.createTextNode(postTitle);
   // frame.appendChild(textTitle);
     if (postTitle === ''){
       alert("Your Post! has to have a Title");
     } else {
        main.appendChild(frame);
        //titleHtml.innerHTML = postTitle;
      
     }
     
    
}



postB.addEventListener('click', addingPost);