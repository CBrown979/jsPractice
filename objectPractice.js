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

//Accessing Nested Objects 
// Setup
var myStorage = {
  "car": {
    "inside": {
      "glove box": "maps",
      "passenger seat": "crumbs"
     },
    "outside": {
      "trunk": "jack"
    }
  }
};

// Only change code below this line

var gloveBoxContents = myStorage.car.inside["glove box"]; // Change this line
console.log(gloveBoxContents);

// The sub-properties of objects can be accessed by chaining together the dot or bracket notation.

// Here is a nested object:

// var ourStorage = {
//   "desk": {
//     "drawer": "stapler"
//   },
//   "cabinet": {
//     "top drawer": { 
//       "folder1": "a file",
//       "folder2": "secrets"
//     },
//     "bottom drawer": "soda"
//   }
// };
// ourStorage.cabinet["top drawer"].folder2;  // "secrets"
// ourStorage.desk.drawer; // "stapler"
// Instructions
// Access the myStorage object and assign the contents of the glove box property to the gloveBoxContents variable. Use bracket notation for properties with a space in their name.

//Accessing Nested Arrays 
// Setup
var myPlants = [
  { 
    type: "flowers",
    list: [
      "rose",
      "tulip",
      "dandelion"
    ]
  },
  {
    type: "trees",
    list: [
      "fir",
      "pine",
      "birch"
    ]
  }  
];

// Only change code below this line

var secondTree = myPlants[1].list[1]; // Change this line
console.log(secondTree);

// As we have seen in earlier examples, objects can contain both nested objects and nested arrays. Similar to accessing nested objects, Array bracket notation can be chained to access nested arrays.
// Here is an example of how to access a nested array:

// var ourPets = [
//   {
//     animalType: "cat",
//     names: [
//       "Meowzer",
//       "Fluffy",
//       "Kit-Cat"
//     ]
//   },
//   {
//     animalType: "dog",
//     names: [
//       "Spot",
//       "Bowser",
//       "Frankie"
//     ]
//   }
// ];
// ourPets[0].names[1]; // "Fluffy"
// ourPets[1].names[0]; // "Spot"
// Instructions
// Retrieve the second tree from the variable myPlants using object dot and array bracket notation.

// Example
var ourArray = [];

for (var i = 0; i < 5; i++) {
  ourArray.push(i);
}

// Setup
var myArray = [];

// Only change code below this line.
for (var i=1; i<=5; i++){
  myArray.push(i);
}
console.log(myArray);

// Iterate with JavaScript For Loops 
// You can run the same code multiple times by using a loop.

// The most common type of JavaScript loop is called a "for loop" because it runs "for" a specific number of times.

// For loops are declared with three optional expressions separated by semicolons:

// for ([initialization]; [condition]; [final-expression])

// The initialization statement is executed one time only before the loop starts. It is typically used to define and setup your loop variable.

// The condition statement is evaluated at the beginning of every loop iteration and will continue as long as it evaluates to true. When condition is false at the start of the iteration, the loop will stop executing. This means if condition starts as false, your loop will never execute.

// The final-expression is executed at the end of each loop iteration, prior to the next condition check and is usually used to increment or decrement your loop counter.

// In the following example we initialize with i = 0 and iterate while our condition i < 5 is true. We'll increment i by 1 in each loop iteration with i++ as our final-expression.

// var ourArray = [];
// for (var i = 0; i < 5; i++) {
//   ourArray.push(i);
// }
// ourArray will now contain [0,1,2,3,4].
// Instructions
// Use a for loop to work to push the values 1 through 5 onto myArray.


//Iterate Odd Numbers With a For Loop
// Example
var ourArray = [];

for (var i = 0; i < 10; i += 2) {
  ourArray.push(i);
}
// Setup
var myArray = [];

// Only change code below this line.
for (var i=1; i<10; i+=2) {
  myArray.push(i);
}
console.log(myArray);
// For loops don't have to iterate one at a time. By changing our final-expression, we can count by even numbers.

// We'll start at i = 0 and loop while i < 10. We'll increment i by 2 each loop with i += 2.

// var ourArray = [];
// for (var i = 0; i < 10; i += 2) {
//   ourArray.push(i);
// }
// ourArray will now contain [0,2,4,6,8].

// Let's change our initialization so we can count by odd numbers.

// Instructions
// Push the odd numbers from 1 through 9 to myArray using a for loop.


//Count Backwards With a For Loop// Example
var ourArray = [];

for (var i = 10; i > 0; i -= 2) {
  ourArray.push(i);
}

// Setup
var myArray = [];

// Only change code below this line.
for (var i=9; i>0; i-=2){
  myArray.push(i);
}
console.log(myArray);

// A for loop can also count backwards, so long as we can define the right conditions.

// In order to count backwards by twos, we'll need to change our initialization, condition, and final-expression.

// We'll start at i = 10 and loop while i > 0. We'll decrement i by 2 each loop with i -= 2.

// var ourArray = [];
// for (var i=10; i > 0; i-=2) {
//   ourArray.push(i);
// }
// ourArray will now contain [10,8,6,4,2].

// Let's change our initialization and final-expression so we can count backward by twos by odd numbers.

// Instructions
// Push the odd numbers from 9 through 1 to myArray using a for loop.


//For Loop
// Example
var ourArr = [ 9, 10, 11, 12];
var ourTotal = 0;

for (var i = 0; i < ourArr.length; i++) {
  ourTotal += ourArr[i];
}
console.log(ourTotal);

// Setup
var myArr = [ 2, 3, 4, 5, 6]; 
var total = 0; //inital variable total to hold the total count of each element in the array
for(var i=0; i<myArr.length; i++){ //initial i to equal 0; run thru length of array & increment by 1
  total += myArr[i]; //total first = 2, then adds 3, = 5 adds 4, = 9 adds 5, = 14 adds 6 = 20
}
console.log(total); //print value of total to the console
// Only change code below this line

// A common task in JavaScript is to iterate through the contents of an array. One way to do that is with a for loop. This code will output each element of the array arr to the console:
// var arr = [10,9,8,7,6];
// for (var i=0; i < arr.length; i++) {
//   console.log(arr[i]);
// }
// Remember that Arrays have zero-based numbering, which means the last index of the array is length - 1. Our condition for this loop is i < arr.length, which stops when i is at length - 1.
// Instructions
// Declare and initialize a variable total to 0. Use a for loop to add the value of each element of the myArr array to total.


//Nesting For Loops
function multiplyAll(arr) { //create function called multiplyAll that takes an array as its parameter
  var product = 1; //create a variable name product that will multiply itself by each number in the arrays
  // Only change code below this line
  for(var i=0; i<arr.length; i++){//initial i to 0; i is less than the length of the array; increement i by 1
    for (var j=0; j<arr[i].length; j++){//initial j to 0; j is less than the length of the i array; increment j by 1
      product *= arr[i][j];//multiple product and make it equal to each number in both the i & j arrays 
    }
  }
  // Only change code above this line
  return product; //return the multiplied total
}

// Modify values below to test your code
console.log(multiplyAll([[1,2],[3,4],[5,6,7]]));


//Iterate with JavaScript While Loops 
// Setup
var myArray = [];

// Only change code below this line.
var i = 0;
while (i<5){
  myArray.push(i);
  i++;
}
console.log(myArray);

// You can run the same code multiple times by using a loop.

// Another type of JavaScript loop is called a "while loop", because it runs "while" a specified condition is true and stops once that condition is no longer true.

// var ourArray = [];
// var i = 0;
// while(i < 5) {
//   ourArray.push(i);
//   i++;
// }
// Let's try getting a while loop to work by pushing values to an array.

// Instructions
// Push the numbers 0 through 4 to myArray using a while loop.

// If you have a multi-dimensional array, you can use the same logic as the prior waypoint to loop through both the array and any sub-arrays. Here is an example:

// var arr = [
//   [1,2], [3,4], [5,6]
// ];
// for (var i=0; i < arr.length; i++) {
//   for (var j=0; j < arr[i].length; j++) {
//     console.log(arr[i][j]);
//   }
// }
// This outputs each sub-element in arr one at a time. Note that for the inner loop, we are checking the .length of arr[i], since arr[i] is itself an array.

// Instructions
// Modify function multiplyAll so that it multiplies the product variable by each number in the sub-arrays of arr


//Profile Lookup
//Setup
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["Javascript", "Gaming", "Foxes"]
    }
    ];


function lookUpProfile(firstName, prop){
// Only change code below this line
  for (var i = 0; i < contacts.length; i++){
    if (contacts[i].firstName === firstName) {
        if (contacts[i].hasOwnProperty(prop)) {
            return contacts[i][prop];
        } else {
            return "No such property";
        }
    }
  }
  return "No such contact";
  
//   for (var i = 0; i<contacts.length; i++){
//     if (contacts[i].firstName === firstName){
//       if (contacts[i].hasOwnProperty("prop")){
//         return contacts[i][prop];
//       } else if (!contacts[i].firstName){
//         return "No such contact";
//       } else if (!contacts[i].prop){
//         return "No such property";
//       }
//     }
//   }
  
//   if(contacts.hasOwnProperty("firstName") && contacts.hasOwnProperty("prop")){
//     return contacts.prop;
//   } else if(!contacts.firstName){
//     return "No such contact";
//   } else if(!contacts.prop){
//     return "No such property";
//   }
// Only change code above this line
}

// Change these values to test your function
// lookUpProfile("Akira", "likes");

//EXPLANATION
// We have an array of objects representing different people in our contacts lists.
// A lookUpProfile function that takes firstName and a property (prop) as arguments has been pre-written for you.
// The function should check if firstName is an actual contact's firstName and the given property (prop) is a property of that contact.
// If both are true, then return the "value" of that property.
// If firstName does not correspond to any contacts then return "No such contact"
// If prop does not correspond to any valid properties then return "No such property"

