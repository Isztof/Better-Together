console.log("Hello Word")
//Global Selectors
const  main = document.querySelector('main');

// Adding a new post
function addingPost(){
    let frame =  document.createElement("div");
    frame.className = "frame";
    frame.innerHTML = ` 
    <div class="authorDateTag">
    <img class="picture" src="imgs/50x50picture.png" alt="">
    <!-- <div class="picture" ></div> -->
     <div class="authorTag">John Doe</div>
     <div class="dateTag">27.01.2021 21:49</div>
     <h4 class="noteTitle" >I will be replaced by a variable with the title</h4> 
   </div>
  
     <div class="noteDescription"> "Description" - going to be replaced by the description from the input field 
       Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
       Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
       dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non 
       proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
     </div>
    <div class="postBtns">
       <button  class="commentBtn"> Comment</button> 
       
       <button class="repButton">Report</button> 
   </div>
    `
    main.appendChild(frame);
}

const postB = document.querySelector("#postB");

postB.addEventListener('click', addingPost);