//getting posts
fetch('/.netlify/functions/get-posts').then(response => response.json()).then(console.log);