var lucky11Main = function (input) {
 // Complete the Base: Lucky 11 exercise below with lucky11Main as the main function.
 /* Create a dice game that allows a user input a guess number and roll 2 dice when the Submit button is clicked. The user wins if:

One of the dice roll matches their guess, or
If the total dice roll is 11.
Otherwise the user loses.
*/
 var myOutputValue = "hello world";
 var rollDice = function () {
  var diceRoll = Math.floor(Math.random() * 6) + 1;
  return diceRoll;
 };
 if (input > 6 || input < 1) {
  myOutputValue = "Please input a valid number";
 }
 var diceOne = rollDice();
 var diceTwo = rollDice();
 console.log(diceOne, diceTwo);
 if (
  input == diceOne ||
  input == diceTwo ||
  diceOne + diceTwo == 11
 ) {
  myOutputValue = "Congratulations, you won!!!";
 } else {
  myOutputValue = "Try Again";
 }

 return myOutputValue;
};

var hawkerFoodCategorisationMain = function (input) {
 // Complete the Base: Hawker Food Categorisation exercise below with hawkerFoodCategorisationMain as the main function.
 var myOutputValue = "hello world";
 return myOutputValue;
};

var fourDSingleDigitMain = function (input) {
 // Complete the Comfortable: 4D with Single-Digit Comparison exercise below with fourDSingleDigitMain as the main function.
 var myOutputValue = "hello world";
 return myOutputValue;
};

var hawkerFoodRandomnessMain = function (input) {
 // Complete the Comfortable: Hawker Food Randomness exercise below with hawkerFoodRandomnessMain as the main function.
 var myOutputValue = "hello world";
 return myOutputValue;
};

var fourDWinningRangeMain = function (input) {
 // Complete the More Comfortable: 4D with Winning Range exercise below with fourDWinningRangeMain as the main function.
 var myOutputValue = "hello world";
 return myOutputValue;
};

var hawkerFoodOmakaseMain = function (input) {
 // Complete the More Comfortable: Hawker Food Omakase exercise below with hawkerFoodOmakaseMain as the main function.
 var myOutputValue = "hello world";
 return myOutputValue;
};
