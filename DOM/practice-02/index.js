let increaseBtn = document.getElementById("increase");
let decreaseBtn = document.getElementById("decrease");
let resetBtn = document.getElementById("reset");
let counter = document.getElementById("count");

let count = 0;
increaseBtn.addEventListener("click", () => {
  count++;
  counter.innerText = count;
  if (count > 0) {
    counter.style = "color:green ";
  }
});

decreaseBtn.addEventListener("click", () => {
  count--;
  counter.innerText = count;
  if (count < 0) {
    counter.style = "color : red";
  }
});

resetBtn.addEventListener("click", () => {
  count = 0;
  counter.innerText = count;
  if (count === 0) {
    counter.style = "color : black";
  }
});
