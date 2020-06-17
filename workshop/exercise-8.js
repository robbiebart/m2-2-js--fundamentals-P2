// You are not allowed to for or while loops.
// Instead focus on the array methods (filter, map, forEach, etc)

// You will also need to verify that your functions work as expected. Be sure to test them. :)

// Q8
// Adds "Hello " to every element of greet
// For example: greet(["bob", "eric"]) returns ["Hello bob", "Hello eric"]
// let new_array = arr.map(function callback( currentValue[, index[, array]]) {
    // return element for new_array
// }[, thisArg])

function greet(lst) {
  let helloArr = lst.map(function(word){
    return `Hello ${word}`;
  })
  return helloArr;
}
// -------------------------------------------------------------------------
console.log('Q6 greet()', greet(['David', 'Billy', 'Lisa', 'Jennifer']));
