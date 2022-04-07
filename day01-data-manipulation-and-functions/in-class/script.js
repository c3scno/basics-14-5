/*
Fahrenheit to Celsius
The user enters a temperature in Fahrenheit. The program should output the conversion to Celsius in the output box.
Write the code inside the main function first, then extract the code into a helper function that accepts Fahrenheit as the input and outputs Celcius.
*/

var fahrenheitToCelsiusMain = function (input) {
  var formulaFtoC = ((input - 32) * 5) / 9;
  var myOutputValue = formulaFtoC;
  return `${input} degrees in Fahrenheit is ${myOutputValue} in Celsius`;
};

/*
The user will enter the length (in km) of a planned road trip in his brand new Ferrari.
 Write a program that outputs the total fuel cost (in $) of the road trip.
A new Ferrari is able to travel 9 miles/litre of fuel. Fuel costs $2.20/litre. 
Use the approach below to solve the problem.
*/

var roadTripCostBaseMain = function (input) {
  //  var lengthInKm = input;
  //  var costOfFuel = 2.2
  //  var fuelConsumption = 9
  // var KMtoMiles = lengthInKm*0.62
  // var fuelUsed = KMtoMiles/fuelConsumption
  // var costOfFuelUsed = costOfFuel*fuelUsed

  // var myOutputValue = costOfFuelUsed;
  //   return myOutputValue;
  // Complete the Base: Road Trip Cost exercise below with roadTripCostBaseMain as the main function.  var convertKmToMiles = function (distanceInKm);
  var distanceInMiles = distanceInKm * 0.62;
  //return distanceInKm;
  var calculateTotalFuelCost = (distanceInMiles / 9) * 2.2;
  return "bananas";
  // };
};

var roadTripCostComfortableMain = function (input) {
  // Complete the Comfortable: Road Trip Cost exercise below with roadTripCostComfortableMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var iceMachineMain = function (input) {
  // Complete the More Comfortable: Ice Machine exercise below with iceMachineMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var beerOrderMain = function (input) {
  // Complete the More Comfortable: Beer Order exercise below with beerOrderMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var cellularDataMain = function (input) {
  // Complete the More Comfortable: Cost of Cellular Data exercise below with cellularDataMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};
