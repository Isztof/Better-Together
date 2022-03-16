fetch("../.netlify/functions/displayPosts")
  .then((response) => response.json())
  .then((json) => {
    let li = `<tr><th>Title</th><th>Description</th></tr>`;
    console.log(json);
    json.forEach((item) => {
      li += `
        <tr>
            <td>${item.title} </td>
            <td>${item.content}</td>         
        </tr>`;
    });
    // Display result
    document.getElementById("posts").innerHTML = li;
  });
