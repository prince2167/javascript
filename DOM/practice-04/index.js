let passwordText = document.getElementById("passwordtext");
let toggleButton = document.getElementById("btn");

passwordText.addEventListener("input", () => {
  if (passwordText.value.length <= 10) {
    passwordText.style = "background-color: red";
  } else {
    passwordText.style = "background: green";
  }
});

toggleButton.addEventListener("click", () => {
  if (passwordText.type === "password") {
    passwordText.type = "text";
    toggleButton.innerText = "hide";
  } else {
    passwordText.type = "password";
    toggleButton.innerText = "show";
  }
});