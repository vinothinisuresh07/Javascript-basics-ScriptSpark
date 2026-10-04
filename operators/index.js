// Episode 4: JavaScript Operators
// Video: <https://youtu.be/EkzhgPpE5p8?si=mXEdxx_Ju3iajgXB>
//
// How to run:
//   - Browser: press F12 -> Console tab -> paste the code
//   - VS Code: open terminal and run `node index.js`
//
// Each example is inside { } so the same variable names (a, b, age...) can be
// reused in one file without errors.
// (If you paste this twice in the browser Console, refresh the page first.)


// ---------- What is an operator? ----------
// An operator is a symbol that performs an operation on values.
// In 10 + 5, the numbers 10 and 5 are operands and + is the operator.
console.log(10 + 5); // 15

// 5 groups: Arithmetic, Assignment, Comparison, Logical, Ternary


// ============ 1. Arithmetic operators ============
{
  let a = 10;
  let b = 3;

  console.log(a + b);  // 13
  console.log(a - b);  // 7
  console.log(a * b);  // 30
  console.log(a / b);  // 3.3333333333333335
  console.log(a % b);  // 1  (remainder)
  console.log(a ** b); // 1000  (10 power 3)
}

// Even and odd check with %
console.log(8 % 2); // 0 -> even
console.log(7 % 2); // 1 -> odd

// Increment and decrement
{
  let count = 5;

  count++;
  console.log(count); // 6

  count--;
  console.log(count); // 5
}
// Takeaway: % is remainder, ** is power


// ============ 2. Assignment operators ============
{
  let score = 10; // = assigns a value

  score += 5; // same as score = score + 5
  console.log(score); // 15

  score -= 3; // same as score = score - 3
  console.log(score); // 12

  score *= 2; // same as score = score * 2
  console.log(score); // 24
}
// Takeaway: += is a shortcut for score = score + 5


// ============ 3. Comparison operators ============
// The result is always true or false.
console.log(5 > 3);  // true
console.log(5 < 3);  // false
console.log(5 >= 5); // true
console.log(5 <= 4); // false

// == vs ===
console.log(5 == "5");  // true  (== converts the type, then compares the value)
console.log(5 === "5"); // false (=== checks value AND type)

console.log(5 != "5");  // false (value is equal)
console.log(5 !== "5"); // true  (type is different)
// Takeaway: use === and !== because they are safer and more predictable


// ============ 4. Logical operators ============
{
  let age = 20;
  let hasId = true;

  console.log(age >= 18 && hasId); // true  (AND: both must be true)
  console.log(age < 18 || hasId);  // true  (OR: one true is enough)
  console.log(!hasId);             // false (NOT: reverses the value)
}


// ============ 5. Ternary operator ============
// A short form of if/else.
// condition ? valueIfTrue : valueIfFalse

// Normal if/else
{
  let age = 20;
  let result;

  if (age >= 18) {
    result = "Adult";
  } else {
    result = "Minor";
  }
  console.log(result); // Adult
}

// Same logic in one line
{
  let age = 20;
  let result = age >= 18 ? "Adult" : "Minor";
  console.log(result); // Adult
}
// Takeaway: use the ternary operator for short, simple if/else


// ============ Challenge ============
// Guess the output of both lines BEFORE running them.
// Do they give the same result?
console.log("5" + 3);
console.log("5" - 3);
// Hint: + joins when a string is involved. - converts the string to a number.