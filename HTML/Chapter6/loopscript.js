// functions in JavaScript, just like in Python, can
// take any number of arguments
//
// We can provide default values, should the user not
// provide one or more of the arguments.
//
// Just like in Python, we use the keyword "function"
// to define a function.

function playGuessingGame(numToGuess = 50, totalGuesses = 10) {
   // Define a variable to hold the "prompt" to be printed
   var promptText = "Enter a number between 1 and 100.";

   // For loops:  since we know the maximum number of times
   // that the loop will be executed (=totalGuesses), we will
   // choose to use a for loop
   //
   // The syntax is:
   // for (var <loop_variable> = <starting value>; loop termination condition; loop increment)
   //
   // Note:  guesses++ is the same as guesses=guesses+1
   //        guesses-- is the same as guesses=guesses-1
   //

   for (var guesses = 1; guesses <= totalGuesses; guesses++) {
      // Get the guess from the user
      var num = prompt(promptText);

      // check to see if they entered anything at all
      if (num === null) {
         return 0;
      } else {
          // check to see if they entered an actual number
          if (num === "" || isNaN(num)) {
            // give them another chance!  Need to decrement guesses
            promptText = "Please enter a number.";
            guesses--;
          } else {
              // If they got it right, end the loop!
              if (num == numToGuess) {
                return guesses;
              } else {
                  // otherwise, give them a hint
                  if (num < numToGuess) {
                    promptText = num + " is too small. Guess a larger number.";
                  } else {
                    promptText = num + " is too large. Guess a smaller number.";
                  }
              }
          }
      }
    }

    // We could have also implmented all of this with a while loop!
    //
    // var guesses = 1;
    // while (guesses<=totalGuesses) {
    //     .
    //     . same code
    //     . as for loop
    //     .
    //     .
    //     guesses++
    // }
    //

    return 0;
}
