const passwordText = document.querySelector(`.password`);
const toggleButton = document.querySelector(`.toggleButton`);

passwordText.addEventListener("input", () => {
  if (passwordText.value.length < 10) {
    passwordText.style = "background-color:red";
  } else {
    passwordText.style = "background-color :green";
  }
});

toggleButton.addEventListener("click", () => {
    if (passwordText.type === "password") {
      passwordText.type = "text";
      toggleButton.innerText = "Hide";
    } else {
      passwordText.type = "password";
      toggleButton.innerText = "Show";
    }
  });