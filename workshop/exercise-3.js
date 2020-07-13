// Q3.1
// Write a function that accepts two integers and returns
// the greater one. (this is slightly different from the previous question.)

// function intergerReturn(num1, num2) {
//   let greaterNum;
//   if (num1 > num2) {
//     greaterNum = num1;
//   } else {
//     greaterNum = num2;
//   }
//   console.log(`${greaterNum} is the greater number`);
// }

const intergerReturn = (num1, num2) => {
  if (num1 > num2) {
    return (greaterNum = num1);
  } else {
    return (greaterNum = num2);
  }
};
console.log(`${intergerReturn(1, 2)} is bigger`);

// Also, wouldn't it be nice if there were a Math method that could simplify the code....
// https://www.w3schools.com/jsreF/jsref_obj_math.asp

// Q3.2
// Without changing the function at all,
// Can you figure out how we could use it to determine the greater number between 4 integers?

let biggestInterger = intergerReturn(
  intergerReturn(1, 2),
  intergerReturn(3, 4)
); //{
// console.log(`${biggestInterger} is the biggest interger.`)
//}
//console.log(biggestInterger)
// Q3.3
// Would this work with more integers?
console.log(`The biggest integer is ${biggestInterger}`);
