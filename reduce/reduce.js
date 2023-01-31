// The reduce () excutes reducer function on each  element of an aaray
//  and resulting a single output value

const array = [2, 5, 4, 9];
//  total
debugger;
let total = array.reduce((accum, currnValue) => {
  return accum + currnValue;
});
console.log(total);

// /avverage

let avg = array.reduce((accum, currnValue, index, array) => {
  let total = accum + currnValue;
  if (index === array.length - 1) {
    return total / array.length;
  }
  return total;
});
console.log(avg);

