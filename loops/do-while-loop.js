const numbers = [2, 5, 8, 5];
let total = 0;

let i = 0;
do {
  total += numbers[i];
  i++;
} while (i < numbers.length);
console.log(total);
