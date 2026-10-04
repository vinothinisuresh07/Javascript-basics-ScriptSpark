// Episode 2: JavaScript Data Types
// Video: <https://youtu.be/Lo3YxNjOpUc?si=-oK8z91dPHXnJV-A>
//
// How to run:
//   - Browser: press F12 -> Console tab -> paste the code
//   - VS Code: open terminal and run `node index.js`
//
// Each example is inside { } so the same variable names (a, b, x...) can be
// reused in one file without errors.
// (If you paste this twice in the browser Console, refresh the page first.)


// ---------- What is a data type? ----------
// A data type tells us what kind of value we are dealing with.
{
  let name = "Vinothini"; // String
  let age = 20;           // Number
  let isStudent = true;   // Boolean
  console.log(name, age, isStudent);
}


// ============ PRIMITIVE DATA TYPES (7) ============

// ---------- 1. String ----------
// Text or characters. Use single quotes, double quotes or backticks.
{
  let name = "Vinothini";
  console.log(name);

  let a = "Hello";
  let b = 'Hello';
  let c = `Hello`;
  console.log(a, b, c); // Hello Hello Hello
}


// ---------- 2. Number ----------
// Integers and decimals are both "Number".
{
  let age = 20;
  let price = 99.5;
  console.log(age, price); // 20 99.5

  let x = 10;
  let y = 10.5;
  console.log(x, y); // 10 10.5
}


// ---------- 3. Boolean ----------
// Only two values: true or false. Very important in conditions.
{
  let isLoggedIn = true;
  let isAdmin = false;
  console.log(isLoggedIn, isAdmin); // true false

  if (isLoggedIn) {
    console.log("Welcome"); // Welcome
  }
}


// ---------- 4. Symbol ----------
// Used to create unique values, mainly unique identifiers.
{
  let id = Symbol("id");
  console.log(id); // Symbol(id)

  let a = Symbol("id");
  let b = Symbol("id");
  console.log(a === b); // false (same description, but two different Symbols)
}


// ---------- 5. Undefined ----------
// A variable is declared but no value is assigned.
{
  let x;
  console.log(x); // undefined
}


// ---------- 6. Null ----------
// Intentionally empty value.
{
  let data = null;
  console.log(data); // null
}
// Undefined -> value was not assigned
// Null      -> value is intentionally empty


// ---------- 7. BigInt ----------
// For very big integers that a normal Number cannot handle.
// Notice the "n" at the end of the number.
{
  let bigNumber = 12345678901234567890n;
  console.log(bigNumber); // 12345678901234567890n
}


// ============ NON-PRIMITIVE DATA TYPE (1) ============

// ---------- 8. Object ----------
// Stores multiple related values together as key-value pairs.
{
  let student = {
    name: "Vinothini", // String
    age: 20,           // Number
    isStudent: true    // Boolean
  };
  console.log(student);
  console.log(student.name); // Vinothini
}

// Arrays and functions are also objects. There is no separate "Array" data type.
{
  let fruits = ["Apple", "Mango", "Orange"];
  console.log(fruits);
}


// ---------- Extra: check a type with typeof (not in the video) ----------
console.log(typeof "Hello");     // string
console.log(typeof 20);          // number
console.log(typeof true);        // boolean
console.log(typeof Symbol("id")); // symbol
console.log(typeof undefined);   // undefined
console.log(typeof 123n);        // bigint
console.log(typeof {});          // object
console.log(typeof []);          // object (array is an object)
console.log(typeof null);        // object  <- a famous JavaScript quirk, null is NOT an object


// ---------- Try it yourself ----------
// 1. Make one variable of each of the 8 types and check them with typeof.
// 2. Why does `let x;` print undefined, but `let data = null;` print null?