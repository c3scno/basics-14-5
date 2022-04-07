var main = function (input) {
 //generate random scissors, paper or stone
 //  var generateByCom = generateSPS();
 //  console.log(generateByCom);
 //  //default myOutputValue
 var myOutputValue = "Input needed.";
 //error message
 if (
  input != "scissors" ||
  input != "paper" ||
  input != "stone"
 ) {
  myOutputValue = "Please input scissors, paper or stone.";
 }
 return myOutputValue;
};
