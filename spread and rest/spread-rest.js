const number = [1, 2, 3, 4, 5];
const newNumbers = [...numbers];
console.log(newNumbers);

const number1 = [1, 2, 3, 4, 5];
const number2 = [5, 6, 7, 8];
const newNumber = [...number1, ...number2];
console.log(newNumber);


const data = {
  id: 1,
  name: "prince",
  age: 21,
  courses: ["1", "2"]
};
const item = { ...data };
data.courses.push("3");
console.log(data);

function sum(...number) {
  console.log(number);
  let result = 0;
  for (let num of number) {
    result += num;
  }
  return result;
}
let numbers = [3, 4, 5, 6];
console.log(sum(...numbers));