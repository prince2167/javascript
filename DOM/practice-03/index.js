let text = document.getElementById("text");
let btnOne = document.getElementById("headingOne");
let btnTwo = document.getElementById("headingTwo");
let btnThree = document.getElementById("headingThree");

let fontSize;
btnOne.addEventListener("click", () => {
  fontSize = 32;
  text.style = `font-size:${fontSize}px`;
  console.log(text);
});
btnTwo.addEventListener("click", () => {
  fontSize = 22;
  text.style = `font-size : ${fontSize}px`;
});
btnThree.addEventListener("click", () => {
  fontSize = 20;
  text.style = `font-size : ${fontSize}px`;
});
