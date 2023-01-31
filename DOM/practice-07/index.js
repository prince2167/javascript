let inputPassword = document.getElementById("password");
let inputMessage = document.getElementById("message");
let submitButton = document.getElementById("submit-btn");

inputPassword.addEventListener("input", () => {
  if (inputPassword.value.length < 10) {
    inputMessage.innerText = "Error";
    inputPassword.style = "background-color:red";
  } else {
    inputMessage.innerText = "Success";
    submitButton.disabled = false;
    inputPassword.style = "background-color:green";
  }
});