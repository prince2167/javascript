const numbers = [2, 3, 4, 5, 6, 78];
const evenNumber = numbers.filter((number) => {
  return number % 2 === 0;
});
console.log(evenNumber);

const ages = [32, 33, 16, 40];
const result = ages.filter((age)=>{
  return age >= 18
})

console.log(result)
