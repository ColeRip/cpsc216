// Passing Arrays to Functions

// Define a function to calculate the average of an array of numbers
//
// sum will be a LOCAL variable
// numbers will be a LOCAL array variable
//
// In JavaScript, when we pass an array to a function, a "link" is made
// between the local array and the actual array that is passed to the function.
// So, when we change the local array within the function, we are actually
// changing the array that is passed to it!!!!!!!!!!!!!!!!!
//
// In computer science, this is known as "pass by reference"
//
function findAverage(numbers) {
   let sum = 0;
   for (let i = 0; i < numbers.length; i++) {
      sum += numbers[i];
   }
   return sum / numbers.length;
}

// Define a function that will take array of scores, and add a bonus amount
// to each score
//
// bonus will be a LOCAL variable
// scores will be a LOCAL array variable
//
// Again, when we change scores, we are also changing the array that was passed!
function giveBonus(scores, bonus) {
   for (let i = 0; i < scores.length; i++) {
      scores[i] += bonus;
   }
}

let examScores = [79, 85, 60, 93];
console.log("Average is " + findAverage(examScores));

console.log("Original exam scores: " + examScores);
giveBonus(examScores, 5);
console.log("New exam scores: " + examScores);
console.log("New average is " + findAverage(examScores));
