const arr1 = ["orange", "apple", "pineapple"];
const arr2 = ["apple", "pineapple", "patao"];

const arr3 = [...arr1, ...arr2];

arr3.sort()

arr3.reverse();

// arr3 = [...new Set(arr3)];
// function removeDuplicate(arr) {
//   return arr.filter((item, index) => arr.indexOf(item) === index);
// }
// removeDuplicate(arr3);
console.log(arr3);

const numbers = [20,40,2,8,3,10,66,23,40,20]
// numbers.sort((a,b)=> a-b)
// numbers.sort((a,b)=> b-a)


numbers = [...new set(numbers)]
console.log(numbers)