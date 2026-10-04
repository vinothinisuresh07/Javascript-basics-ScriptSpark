// Episode 3: JavaScript Values vs References
// Video: <https://youtu.be/myrNWaZmgh0?si=rJWEoLtHZs4mgB9Z>
//
// How to run:
//   - Browser: press F12 -> Console tab -> paste the code
//   - VS Code: open terminal and run `node index.js`
//
// Each example is inside { } so the same variable names (a, b, x...) can be
// reused in one file without errors.
// (If you paste this twice in the browser Console, refresh the page first.)


// ---------- why did arr1 change? ----------
{
  let arr1 = [1, 2, 3];
  let arr2 = arr1;
  arr2.push(4);
  console.log(arr1); // [ 1, 2, 3, 4 ]  <- arr1 changed too!
}


// ---------- Primitives = copy by value ----------
// String, Number, Boolean, Symbol, Undefined, Null, BigInt
{
  let a = 10;
  let b = a; // a copy of the value 10 goes into b
  b = 20;    // only b changes
  console.log(a); // 10
  console.log(b); // 20
}
// After line 1:   a = 10
// After line 2:   a = 10, b = 10 (copy)
// After line 3:   a = 10, b = 20 (only b changed)
//
// Primitive -> Copy by Value -> both are independent


// ---------- Objects and arrays = copy by reference ----------
// Object, Array and Function are reference types.
// The variable stores the memory address, not the actual data.
{
  const user1 = { name: "Vinothini" };
  const user2 = user1; // copies the address, NOT the object
  user2.name = "Ram";
  console.log(user1.name); // Ram  (user1 and user2 point to the same object)
}
// Object / Array -> Copy by Reference -> both point to the same data


// ---------- Comparison gotcha (famous interview question) ----------
// Primitives are compared by value. Objects are compared by address.
console.log("a" === "a"); // true
console.log({} === {});   // false (two different memory locations)

{
  const x = {};
  const y = x; // same reference
  console.log(x === y); // true
}


// ---------- How to copy properly ----------

// Shallow copy: spread operator
// Top-level values are copied. Nested objects/arrays are still shared.
{
  const user = { name: "Vinothini", skills: ["JS"] };
  const copy = { ...user }; // shallow copy

  copy.name = "Ram";
  console.log(user.name); // Vinothini (safe, name is a primitive)

  copy.skills.push("React");
  console.log(user.skills); // [ 'JS', 'React' ]  (changed! skills is shared)
}

// Deep copy: structuredClone
// Nested data is copied fully, so nothing is shared.
// (Works in modern browsers and Node.js 17+)
{
  const original = { name: "Vinothini", skills: ["JS"] };
  const deep = structuredClone(original);

  deep.skills.push("Node");
  console.log(original.skills); // [ 'JS' ]  (safe)
  console.log(deep.skills);     // [ 'JS', 'Node' ]
}


// ---------- const only blocks reassignment ----------
// Changing something inside an object (mutation) works even with const.
{
  const person = { name: "Vinothini" };
  person.name = "Ram"; // mutation, works
  console.log(person.name); // Ram

  // Reassigning the whole variable is the error (try/catch is only so the file keeps running)
  try {
    person = { name: "Sam" };
  } catch (error) {
    console.log("Error:", error.message); // Assignment to constant variable.
  }
}


// ---------- Quiz: what is the output? ----------
{
  let a = [1, 2];
  let b = [...a];
  b.push(3);
  console.log(a); // ?  (answer in the comments of the video)
}