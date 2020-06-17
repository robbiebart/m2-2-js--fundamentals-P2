// You are not allowed to for or while loops.
// Instead focus on the array methods (filter, map, forEach, etc)

// You will also need to verify that your functions work as expected. Be sure to test them. :)

// Q9
// Only greet people who's names have length at least 4.
// Otherwise ignore them completely.
// For example: greeLong(["bob", "daniel"]) returns ["Hello daniel"]
// let newArray = arr.filter(callback(element[, index, [array]])[, thisArg])

function greetLong(lst) {
  let longName =  lst.filter(function(word){
    return word.length >= 4;
  })
  let helloLongName = longName.map(function(word){
    return `Hello ${word}`;
  })
  return helloLongName;
}

// -------------------------------------------------------------------------
console.log('Q7 greetLong()', greetLong(['Scott', 'Bob', 'Ric', 'Jim']));
