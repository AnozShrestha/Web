//Check if a day is weekend day or a working day. Your script will take day as an input.
let day = "sunday";
if (day == "sunday" || day == "saturday") {
  console.log("Weekend");
} else {
  console.log("Workday");
}

// Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
// September, October or November, the season is Autumn.
// December, January or February, the season is Winter.
// March, April or May, the season is Spring
// June, July or August, the season is Summer

let month = "january";
switch (month) {
  case "september":
  case "november":
  case "october":
    console.log("autumn");
    break;
  case " december":
  case "january ":
  case "february ":
    console.log(winter);
    break;
  case " march":
  case "april":
  case "may":
    console.log(spring);
    break;
  default:
    console.log(summer);
}

// Write a code which can give grades to students according to theirs scores:
// 80-100, A //marks >80 && marks <100
// 70-79, B
// 60-69, C
// 50-59, D
// 0-49, F

let marks = 95;
if (marks >= 0 && marks <= 49) {
  console.log("F");
} else if (marks >= 50 && marks <= 59) {
  console.log("D");
} else if (marks >= 60 && marks <= 69) {
  console.log("C");
} else if (marks >= 70 && marks <= 79) {
  console.log("B");
} else{
  console.log("A");
}

//  If user is 18 or older ,
// give feedback:'You are old enough to drive' but if not 18 give another feedback stating to
//  wait for the number of years he needs to turn 18.

let age = 3;

if (age >= 18) {
  console.log("Eligible to drive");
} else {
  let age_gap = 18 - age;
  console.log("wait for ${age_gap} to drive");
}

// extra 3
