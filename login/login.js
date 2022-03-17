fetch("../.netlify/functions/getUserAccounts")
  .then((response) => response.json())
  .then((json) => {
    console.log(json);
    json.forEach((item) => {
        let userName = item.email;
        let password = item.password;
    if ((userName ==  emailInputBox.value)  && (password == passwordInputBox.value))  
    {
        window.location ="https://bettter-together-net.netlify.app/index.html";
    } else 
    {
    alert("Username or password is invalid");
    }
