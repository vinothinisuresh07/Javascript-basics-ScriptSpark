// JavaScript Conditionals, Part 2: switch, break, default
// Run with: node index.js

// ------------------------------------------------------------
// 1. The problem: too many else ifs
// ------------------------------------------------------------
console.log("--- 1. else if chain ---");

let day = 3;

if (day === 1) {
  console.log("Monday");
} else if (day === 2) {
  console.log("Tuesday");
} else if (day === 3) {
  console.log("Wednesday");
} else if (day === 4) {
  console.log("Thursday");
} else if (day === 5) {
  console.log("Friday");
} else if (day === 6) {
  console.log("Saturday");
} else if (day === 7) {
  console.log("Sunday");
} else {
  console.log("Invalid day");
}
// Output: Wednesday
// Same variable checked again and again. switch is cleaner.

// ------------------------------------------------------------
// 2. switch syntax
// ------------------------------------------------------------
// switch (value) {
//   case option1:
//     // runs if value matches option1
//     break;
//   case option2:
//     // runs if value matches option2
//     break;
//   default:
//     // runs if nothing matches
// }

// ------------------------------------------------------------
// 3. Example: day name with switch
// ------------------------------------------------------------
console.log("--- 3. switch example ---");

day = 3;

switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  default:
    console.log("Invalid day");
}
// Output: Wednesday

// ------------------------------------------------------------
// 4. break matters
// ------------------------------------------------------------
console.log("--- 4a. WITH break (day = 2) ---");

day = 2;

switch (day) {
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
}
// Output: Tuesday

console.log("--- 4b. WITHOUT break (day = 2) ---");

switch (day) {
  case 2:
    console.log("Tuesday");
  case 3:
    console.log("Wednesday");
}
// Output: Tuesday, Wednesday
// No break, so JavaScript keeps running the cases below.
// This is called fall-through.

// ------------------------------------------------------------
// 5. Grouping cases (intentional fall-through)
// ------------------------------------------------------------
console.log("--- 5. grouping cases ---");

day = 6;

switch (day) {
  case 6:
  case 7:
    console.log("Weekend");
    break;
  default:
    console.log("Weekday");
}
// Output: Weekend
// case 6 has no break, so it falls into case 7's code.

// ------------------------------------------------------------
// 6. default
// ------------------------------------------------------------
console.log("--- 6. default ---");

day = 9;

switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  default:
    console.log("Invalid day");
}
// Output: Invalid day
// default runs when nothing else matches. Keep it last.

// ------------------------------------------------------------
// 7. if-else vs switch
// ------------------------------------------------------------
console.log("--- 7. if-else vs switch ---");

// Range -> if-else
const marks = 82;

if (marks >= 90) {
  console.log("Grade A");
} else if (marks >= 75) {
  console.log("Grade B");
} else {
  console.log("Grade C");
}
// Output: Grade B

// Exact match -> switch
const choice = "tea";

switch (choice) {
  case "tea":
    console.log("One tea coming up");
    break;
  case "coffee":
    console.log("One coffee coming up");
    break;
  default:
    console.log("Sorry, not on the menu");
}
// Output: One tea coming up

// ------------------------------------------------------------
// Challenge
// ------------------------------------------------------------
// Remove every break from the example in section 3, with day = 3.
// What is the output? (Answer in notes.md)