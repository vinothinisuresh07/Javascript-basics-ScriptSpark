// Episode 1: JavaScript Intro + Variables
// Video: <https://youtu.be/Lo3YxNjOpUc?si=RyWcDQIFWK0Gpdi8>
//
// How to run:
//   - Browser: press F12 -> Console tab -> paste the code
//   - VS Code: open terminal and run `node index.js`
//
// Tip: lines marked "ERROR" are commented out, because they stop the whole file.
// Remove the // one at a time to see each error yourself.
// (If you paste this twice in the browser Console, refresh the page first.)


// ---------- What is a variable? ----------
// Think of a variable as a labeled box that stores a value.
let age = 20;
console.log(age); // 20


// ---------- let ----------
// Use let when the value can change later.
let score = 0;
score = 10; // reassign works
console.log(score); // 10

// Redeclare in the same scope -> ERROR
// let score = 20;
// SyntaxError: Identifier 'score' has already been declared


// ---------- const ----------
// Use const when the value should not be reassigned.
const appName = "Two Stacks";
console.log(appName); // Two Stacks

// Reassign -> ERROR (try/catch is used here only so the file keeps running)
try {
  appName = "New Name";
} catch (error) {
  console.log("Error:", error.message); // Assignment to constant variable.
}

// const must get its value at the time of declaration -> ERROR
// const city;
// SyntaxError: Missing initializer in const declaration

// Redeclare in the same scope -> ERROR
// const appName = "New Name";
// SyntaxError: Identifier 'appName' has already been declared


// ---------- var ----------
// The older way. Reassign and redeclare both work.
var oldAge = 20;
oldAge = 25; // reassign works
console.log(oldAge); // 25

var oldAge = 30; // redeclare works, no error
console.log(oldAge); // 30
// (var is renamed to oldAge here so it doesn't clash with `let age` above)


// ---------- Small real-world example ----------
// The user's name does not change, so const.
const userName = "Arun";

// Login status starts false and changes later, so let.
let isLoggedIn = false;
isLoggedIn = true;

console.log(userName, isLoggedIn); // Arun true


// ---------- Try it yourself ----------
// 1. Reassign a let, a const and a var. Which one gives an error?
// 2. Redeclare the same variable with let, const and var. What happens?