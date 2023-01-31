const numbers = [ 2,5,7,3,6,5]

numbers.map((number)=>{
    console.log(number)
})



const array = [3, 5, 6, 6];

sum
let sum = 0;
array.map((item) => {
  return (sum += item);
});
console.log(sum);

// average 
 let avg =0
 let total=0
 array.map((item,index, array) => {
    total+=item
    if (index=== array.length-1){
        avg= total/array.length
    }
    return avg
  });
 
  console.log(avg)
