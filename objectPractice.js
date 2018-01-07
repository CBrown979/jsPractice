// Setup
var testObj = {
  12: "Namath",
  16: "Montana",
  19: "Unitas"
};

// Only change code below this line;

var playerNumber = 16;       // Change this Line
var player = testObj[playerNumber];   // Change this Line
console.log(player);

// Accessing Objects Properties with Variables 
// Another use of bracket notation on objects is to use a variable to access a property. This can be very useful for iterating through lists of the object properties or for doing the lookup.

// Here is an example of using a variable to access a property:

// var someProp = "propName";
// var myObj = {
//   propName: "Some Value"
// }
// myObj[someProp]; // "Some Value"
// Here is one more:

// var myDog = "Hunter";
// var dogs = {
//   Fido: "Mutt",
//   Hunter: "Doberman",
//   Snoopie: "Beagle"
// }
// var breed = dogs[myDog];
// console.log(breed);// "Doberman"
// Note that we do not use quotes around the variable name when using it to access the property because we are using the value of the variable, not the name

// Instructions
// Use the playerNumber variable to lookup player 16 in testObj using bracket notation.

//Using Objects for Lookups 
// Setup
function phoneticLookup(val) {
  var result = "";

  // Only change code below this line
  
  var lookup = {
    alpha: "Adams",
    bravo: "Boston",
    charlie: "Chicago",
    delta: "Denver",
    echo: "Easy",
    foxtrot: "Frank"
  };
  result = lookup[val];
  
//   switch(val) {
//     case "alpha": 
//       result = "Adams";
//       break;
//     case "bravo": 
//       result = "Boston";
//       break;
//     case "charlie": 
//       result = "Chicago";
//       break;
//     case "delta": 
//       result = "Denver";
//       break;
//     case "echo": 
//       result = "Easy";
//       break;
//     case "foxtrot": 
//       result = "Frank";
//   }

  // Only change code above this line
  return result;
}

// Change this value to test
console.log(phoneticLookup("charlie"));
console.log(phoneticLookup("bravo"));
console.log(phoneticLookup("foxtrot"));
console.log(phoneticLookup("echo"));


//Delete Object Properties
// Example
var ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"],
  "bark": "bow-wow"
};

delete ourDog.bark;
console.log(ourDog);

// Setup
var myDog = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["Free Code Camp Campers"],
  "bark": "woof"
};

delete myDog["tails"];
console.log(myDog);

//Testing Objects for Properties 
// Setup
var myObj = {
  gift: "pony",
  pet: "kitten",
  bed: "sleigh"
};

function checkObj(checkProp) { //create a function called checkObj that takes a parameter called checkProp
  // Your Code Here
  if (myObj[checkProp]){ //if myObj[and parameter] exists (is true) within the Object variable
    return myObj[checkProp]; //return myObj[parameter]'s value
  } else { // if not found
    return "Not Found"; //return not found
  }
  
}

// Test your code by modifying these values
console.log(checkObj("gift"));
console.log(checkObj("pet"));


// Testing Objects for Properties 
// Sometimes it is useful to check if the property of a given object exists or not. We can use the .hasOwnProperty(propname) method of objects to determine if that object has the given property name. .hasOwnProperty() returns true or false if the property is found or not.

// Example

// var myObj = {
//   top: "hat",
//   bottom: "pants"
// };
// myObj.hasOwnProperty("top");    // true
// myObj.hasOwnProperty("middle"); // false
// Instructions
// Modify the function checkObj to test myObj for checkProp. If the property is found, return that property's value. If not, return "Not Found".