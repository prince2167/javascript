let box = document.getElementById("box");

let input = document.getElementById("input");

input.addEventListener("input", () => {
  let value = input.value;
  box.style = `background-color:${value}`;
});
