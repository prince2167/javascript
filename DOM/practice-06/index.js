let inputText = document.getElementById("input-text");
let increseButton = document.getElementById("increase-btn");
let decreseButton = document.getElementById("decrease-btn");
let fontSize = 16;
increseButton.addEventListener("click", () => {
  fontSize = fontSize + 2;
  inputText.style = `font-size : ${fontSize}px`;
});

decreseButton.addEventListener("click", () => {
  fontSize = fontSize - 2;
  inputText.style = `font-size : ${fontSize}px`;
});