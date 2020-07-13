// Q12
// Build on what you did for Q9.
// This time the function should return a letter grade instead of the average.
// Here is how I calculate the grades
// <60 	is F
// <70 	is D
// <80 	is C
// <90 	is B
// <100 is A

function calculateAverage(grades) {
  let sum = 0;
  grades.forEach(function (grade) {
    sum += grade;
  });

  return Math.round(sum / grades.length);
}
console.log(calculateAverage([100, 50]));

function toLetterGrade(grades) {
  if (calculateAverage(grades) < 60) {
    return "F";
  } else if (calculateAverage(grades) <= 60 && calculateAverage(grades) < 70) {
    return "D";
  } else if (calculateAverage(grades) <= 70 && calculateAverage(grades) < 80) {
    return "C";
  } else if (calculateAverage(grades) <= 80 && calculateAverage(grades) < 90) {
    return "B";
  } else {
    return "A";
  }
}
console.log(toLetterGrade([48, 95, 65, 48, 59, 78, 72, 65]));

// const finalGrade = toLetterGrade {
//     calculateAverage([48, 95, 65, 48, 59, 78, 72, 65]);
// }

// console.log(finalGrade);

// Write function here

// Call the function with [48, 95, 65, 48, 59, 78, 72, 65]

// Try with other values as well
