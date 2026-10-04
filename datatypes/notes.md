# Episode 2: JavaScript Data Types

**Video:** <https://youtu.be/Lo3YxNjOpUc?si=-oK8z91dPHXnJV-A>

## What is a data type?
It tells us what kind of value we are dealing with.

```js
let name = "Vinothini"; // String
let age = 20;           // Number
let isStudent = true;   // Boolean
```

JavaScript has **8 data types**: 7 primitive + 1 non-primitive (Object).

## Primitive data types

| # | Type | Used for | Example |
|---|------|----------|---------|
| 1 | String | Text | `"Hello"`, `'Hello'`, `` `Hello` `` |
| 2 | Number | Integers and decimals | `20`, `99.5` |
| 3 | Boolean | `true` or `false` | `let isLoggedIn = true;` |
| 4 | Symbol | Unique values / identifiers | `Symbol("id")` |
| 5 | Undefined | Declared but no value assigned | `let x;` |
| 6 | Null | Intentionally empty | `let data = null;` |
| 7 | BigInt | Very big integers (ends with `n`) | `12345678901234567890n` |

### Points to remember
- **String:** use single quotes, double quotes or backticks.
- **Number:** whole numbers and decimals are both `Number`.
- **Boolean:** very important in conditions, like `if (isLoggedIn)`.
- **Symbol:** every Symbol is unique, even with the same description.

```js
Symbol("id") === Symbol("id"); // false
```

- **Undefined vs Null:**
  - `undefined` = value was not assigned
  - `null` = value is intentionally empty
- **BigInt:** the `n` at the end tells JavaScript it is a BigInt.

## Non-primitive data type

### 8. Object
Stores multiple related values as **key-value pairs**. The values can be different data types.

```js
let student = {
  name: "Vinothini", // String
  age: 20,           // Number
  isStudent: true    // Boolean
};
```

Arrays and functions are also objects. There is no separate "Array" data type.

```js
let fruits = ["Apple", "Mango", "Orange"]; // an array is an object
```

## Common mistakes
- Thinking `20` and `10.5` are different types. Both are `Number`.
- Mixing up `undefined` and `null`.
- Forgetting the `n` in a BigInt.
- Thinking an Array is its own data type.

## Try it yourself
Make a variable of each type and check it with `typeof`. Be careful with `typeof null`: it says `"object"`, which is a known JavaScript quirk.

**Next video:** Values vs References (how primitive and non-primitive types behave differently)