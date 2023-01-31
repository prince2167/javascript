let textInput = document.getElementById("input-text");
let clickButton = document.getElementById("btn");
let displayOutput = document.getElementById("display-output");
clickButton.addEventListener("click", () => {
  let list = document.createElement("li");
  list.textContent += textInput.value;
  displayOutput.append(list);
});
