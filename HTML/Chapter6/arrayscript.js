// Arrays

// Define an empty array - just like Python lists!
let scores = [];

// Initialize the array ... we use square brackets to index the array, just
// like in Python!
scores[0] = 6;
scores[1] = 15;
scores[2] = 8;

console.log(scores[0]);
console.log(scores[1]);
console.log(scores[2]);

// Define an array with specified elements
// NOTE!!!!!!!!  All of the elements must be of the same type!!!!!! This is NOT
//               like Python!!!!!!!!!!!  That is, JavaScript arrays are NOT
//               like Python lists, in this sense

let teams = ["Tigers", "Bisons",
             "Eagles", "Cobras"];

console.log(teams);

// Adding and removing array elements
//
// We have several functions which allow us to manipulate arrays, just as we
// in Python ... they just have different names.

// Add element to the end
let nums = [2, 4, 6];
nums.push(8);  // nums = [2, 4, 6, 8]

// Remove element from the end
let x = nums.pop(); // nums = [2, 4, 6] again, and x = 8

// Add element to the beginning
nums.unshift(17); // nums = [17, 2, 4, 6]

// Remove element from the beginning
let y = nums.shift(); // nums = [2, 4, 6] again, and x = 17

// Remove/Add chunks from/to anywhere
bignums = [2, 4, 6, 8, 10, 12, 14]
bignums.splice(5); //Removes from index 3 to the end ... bignums = [2, 4, 6, 8, 10]

bignums.splice(0,2); // Removes two elements, starting at 0 ... bignums = [6, 8, 10]

bignums.splice(2,0,34,35,36); // adds (34,35,36) beginning at index 2 ...
                              // bignums = [6, 8, 34, 35, 36, 10]

console.log(x)
console.log(y)
console.log(nums)
console.log(bignums)

//
// Looping with arrays
//

// First, define some arrays (of integers)
let dukeScores  = [72, 74, 84, 92, 93, 66, 69, 73, 70, 85, 75, 67, 79];
let ncScores    = [76, 73, 77, 90, 81, 74, 53, 68, 88, 84, 58, 81, 73];
let winningTeam = [];

// Second, loop over all of the games
for (i=0; i<dukeScores.length; i++) {
  if (dukeScores[i] > ncScores[i]) {
     console.log("Duke won " + dukeScores[i] + "-" + ncScores[i] + ".");
     winningTeam[i] = "D";
  }
  else {
     console.log("North Carolina won " + ncScores[i] + "-" + dukeScores[i] + ".");
     winningTeam[i] = "N";
  }
}
console.log(winningTeam);

// Display all winners ... we use here a for-of construction
//
// This loop goes through all of the elements of winningTeam, and each
// time through assigns the value of winningTeam to the variable called winner
//
for (winner of winningTeam) {
   console.log(winner);
}

// But, we could also use a forEach construction
//
// forEach takes a FUNCTION as its argument
//
winningTeam.forEach(function(item) {console.log(item);})
