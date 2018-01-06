function caseInSwitch(val) {
  var answer = "";
  // Only change code below this line
  switch (val) {
    case 1:
      answer = "alpha";
      break;
    case 2:
      answer = "beta";
      break;
    case 3:
      answer = "gamma";
      break;
    case 4:
      answer = "delta";
      break;      
  }
  
  
  // Only change code above this line  
  return answer;  
}

// Change this value to test
console.log(caseInSwitch(1));
console.log(caseInSwitch(2));
console.log(caseInSwitch(3));
console.log(caseInSwitch(4));


function changeExercises(day) { //create a function named changeExercises that takes day as a parameter
    var type = ""; // create a variable to store the type of exercise done per day
    switch (day) { // initialize switch statement to switch day of the week that the function will take as parameter
        case "Monday": // name 1st case "Monday"
            type = "crunches"; // allow crunches to equal the type of exercise done on Mondays
            break; // break if day matches Monday
        case "Tuesday": // name 2nd case "Tuesday"
            type = "squats"; //allow squats to equal type of exercise done on Tuesdays
            break; //break if day matches Tuesday;
    }
    return type; //after all is executed, return the type of exercise
}
console.log(changeExercises("Monday")); // print to screen the type of exercise done on Monday 
console.log(changeExercises("Tuesday"));


function goToMeals(time){
    var food = "";
    switch (time) {
    case "Morning":
        food = "Yogurt & FiberOne";
        break;
    case "Afternoon":
        food = "Broccoli Slaw";
        break;
    case "Evening":
        food = "Salmon & Fresh Garlic";
        break;
    }
    return food;
}
console.log(goToMeals("Afternoon"));
