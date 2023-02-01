const colors = ["red", "blue", "green", "pink", "yellow"];

//  push adds new elements at the end of the array
colors.push("white");

//  unshift adds new elements at the starting  of the array
colors.unshift("hotpink");
console.log(colors);

const numbers = [5, 6, 13, 9, 23, 17, 45];

// pop removes last elements the array
numbers.pop();
// shift removes first elements  of the array
numbers.shift();
console.log(numbers);

const names = ["prince", "omkar", "lokesh", "vikas", "akash"];
const courses = ["bca", "bba"];
names.pop();
names.shift();
console.log(names);


// includes()
const result = names.includes((name)=>name!="prince")
console.log(result)

// concat()
const num1=[1,2,3]
const num2 =[4,5,6]
const num3 = num1.concat(num2)
console.log(num3)

// toLowerCase()
const course = "PRINCE";
console.log(course.toLowerCase());
