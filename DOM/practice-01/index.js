let name = document.getElementById("name");
let email = document.getElementById("email");
let password = document.getElementById("password");
let loginBtn = document.getElementById("btn");

loginBtn.addEventListener("click", () => {
  console.log(name.value);
  console.log(email.value);
  console.log(password.value);
});
