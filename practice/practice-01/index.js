const text = document.getElementById("text");
const btnGreen = document.getElementById("btngreen");
const btnRed = document.getElementById("btnred");
btnGreen.addEventListener("click", () => {
  text.style = "color:green";
  console.log(text);
});
btnRed.addEventListener("click", () => {
  text.style = "color:red";
  console.log(text);
});
