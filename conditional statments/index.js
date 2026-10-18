// ScriptSpark | JavaScript Conditionals - Part 1
// Topics: if, if...else, else if, truthy and falsy
// Run with: node index.js

// Each example is wrapped in { } so variable names can be reused safely.

// 1. if statement
// The block runs only when the condition is true.
console.log("--- 1. if ---");
{
  let age = 20;

  if (age >= 18) {
    console.log("You can vote");
  }
  // Try age = 15 and see: nothing is printed.
}

// 2. if...else
// If the condition is false, the else block runs instead.
console.log("--- 2. if...else ---");
{
  let age = 15;

  if (age >= 18) {
    console.log("You can vote");
  } else {
    console.log("You cannot vote yet");
  }
}

// 3. else if
// Conditions are checked from top to bottom.
// The first true condition wins and the rest are skipped,
// so always put the highest condition first.
console.log("--- 3. else if ---");
{
  let marks = 82;

  if (marks >= 90) {
    console.log("Grade A+");
  } else if (marks >= 75) {
    console.log("Grade A");
  } else if (marks >= 50) {
    console.log("Grade B");
  } else {
    console.log("Fail");
  }
}

// 4. Truthy and falsy
// Falsy values: 0, "" (empty string), null, undefined, NaN, false
// Everything else is truthy.
console.log("--- 4. Truthy and falsy ---");
{
  let name = "";

  if (name) {
    console.log("Hello " + name);
  } else {
    console.log("Please enter your name");
  }
  // Try name = "Vino" and see: Hello Vino
}

// Quick check of falsy and truthy values using Boolean()
console.log("--- Falsy values ---");
console.log(Boolean(0)); // false
console.log(Boolean("")); // false
console.log(Boolean(null)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean(NaN)); // false
console.log(Boolean(false)); // false

console.log("--- Truthy values ---");
console.log(Boolean("Hello")); // true
console.log(Boolean(1)); // true
console.log(Boolean([])); // true
console.log(Boolean({})); // true