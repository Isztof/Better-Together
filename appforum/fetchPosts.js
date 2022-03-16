var id = 0;
fetch("../.netlify/functions/displayPosts")
  .then((response) => response.json())
  .then((json) => {
    console.log(json);
    json.forEach((item) => {
      let postDescription = item.content;
      let postTitle = item.title;
      let frame = document.createElement("div");
      frame.className = "frame";
      frame.id = `post${id}`;

      let addReadMore = false;
      var secondSpan;

      if (postDescription.length > 1250) {
        const firstSpan = postDescription.substring(0, 1250);
        secondSpan = postDescription.substring(1550, postDescription.length);
        postDescription = firstSpan;
        addReadMore = true;
      }

      if (addReadMore) {
        frame.innerHTML = ` 
            <div class="authorDateTag">
            <img class="picture" src="/imgs/50x50picture.png" alt="">
            <!-- <div class="picture" ></div> -->
             <div class="authorTag">John Doe</div>
             <div class="dateTag">27.01.2021 21:49</div>
             <h4 class="noteTitle" > ${postTitle}</h4> 
           </div>
             <div class="noteDescription"> <span> ${postDescription} </span> <span class="readMoreTag" onclick="readMore('${`post${id}`}')">...Read more</span> <span class="secondPart">${secondSpan}</span></div> 
            <div class="postBtns">
               <button onclick="showPanel('${`post${id}`}')"  class="commentBtn"> Comment</button> 
                <button onclick="reportUI()" class="repButton">Report</button>   
           </div>
            `;
      } else {
        frame.innerHTML = ` 
            <div class="authorDateTag">
            <img class="picture" src="/imgs/50x50picture.png" alt="">
            <!-- <div class="picture" ></div> -->
             <div class="authorTag">John Doe</div>
             <div class="dateTag">27.01.2021 21:49</div>
             <h4 class="noteTitle" > ${postTitle}</h4> 
           </div>
             <div class="noteDescription">  ${postDescription}  </div> 
            <div class="postBtns">
               <button onclick="showPanel('${`post${id}`}')"  class="commentBtn"> Comment</button> 
               <button onclick="reportUI()" class="repButton">Report</button>  
           </div>
            `;
      }
      id++;
      document.querySelector("main").appendChild(frame);
    });
  });

function readMore(element) {
  let spanToShow = document.querySelector(`#${element} .secondPart`);
  let spanToHide = document.querySelector(`#${element} .readMoreTag`);
  spanToShow.style.display = "inline-block";
  spanToHide.remove();
}
