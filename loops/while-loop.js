const numbers = [2, 5, 8, 5];
let total = 0;
let i = 0
while(i < numbers.length){

    total +=numbers[i]
    i++
}

console.log(total)


// length of an array 

let j = 0
let count = 0;
while (numbers[j]) {
  count = j;
  j++;
}
console.log(count+1);