fetch("../.netlify/functions/displayPosts")
  .then((response) => response.json())
  .then((json) => {
    console.log(json);
    json.forEach((item) => {
      let postDescription = item.content;
      let postTitle = item.title;
      let frame = document.createElement("div");
      frame.className = "frame";
      /* The read more functionality will be added later 
        if (postDescription.length > 1550) {
            const firstSpan = postDescription.substring(0, 1550);
            secondSpan = postDescription.substring(1550, postDescription.length);
            postDescription = firstSpan;
            addReadMore = true;
            // postDescription.innerHTML += `<a>...Read more</a>`;
          }
        */
      frame.innerHTML = ` 
          <div class="authorDateTag">
          <img class="picture" src="/imgs/50x50picture.png" alt="">
          <!-- <div class="picture" ></div> -->
           <div class="authorTag">John Doe</div>
           <div class="dateTag">27.01.2021 21:49</div>
           <h4 class="noteTitle" > ${postTitle}</h4> 
         </div>
           <div class="noteDescription"> <span> ${postDescription} </span> 
          <div class="postBtns">
             <button onclick="showPanel()"  class="commentBtn"> Comment</button> 
              <button onclick="reportUI()" class="repButton">Report</button>   
         </div>`;
      document.querySelector("section").appendChild(frame);
    });
  });
