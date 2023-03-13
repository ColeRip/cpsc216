// Reference vs Value in JavaScript

// In JavaScript, when we pass an array to a function, a "link" is made
// between the local array and the actual array that is passed to the function.
// So, when we change the local array within the function, we are actually
// changing the array that is passed to it!!!!!!!!!!!!!!!!!
//
// In computer science, this is known as "pass by reference"
//
// In contrast, when we pass a "primitive" variable to a function, a local copy
// of the variable is made, and that copy is used within the function.  That is,
// the value of the variable in the calling function is unaffected.
//
// This is known as "pass by value"


// Define a function that will take a single input, add one to it, and print
// out the result.
//
// passedValue will be a LOCAL Variable
//
function myFunc(passedValue) {
  passedValue = passedValue + 1;
  console.log("Value in the function: " + passedValue);
}

let x = 5;
myFunc(x);
console.log("Value of x after returning from function: " + x );

// Define a function that will take array of scores, and add a bonus amount
// to each score
//
// bonus will be a LOCAL variable
// scores will be a LOCAL array variable
//
// Again, when we change scores, we are also changing the array that was passed!
//
function giveBonus(scores, bonus) {
  for (var i=0; i<scores.length; i++) {
    scores[i] += bonus;
  }
}

let examScores = [79, 85, 60, 93];
console.log("Original exam scores: " + examScores);
giveBonus(examScores, 5);
console.log("New exam scores: " + examScores);
