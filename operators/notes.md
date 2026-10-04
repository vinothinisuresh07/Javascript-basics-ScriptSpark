# Episode 4: JavaScript Operators

**Video:** <>https://youtu.be/EkzhgPpE5p8?si=mXEdxx_Ju3iajgXB

## What is an operator?
A symbol that performs an operation on values.

```js
10 + 5
```

`10` and `5` are **operands**. `+` is the **operator**.

We look at 5 groups: **Arithmetic, Assignment, Comparison, Logical, Ternary**.

## 1. Arithmetic operators
For maths calculations.

```js
let a = 10;
let b = 3;

console.log(a + b);  // 13
console.log(a - b);  // 7
console.log(a * b);  // 30
console.log(a / b);  // 3.3333333333333335
console.log(a % b);  // 1
console.log(a ** b); // 1000
```

| Operator | Meaning |
|----------|---------|
| `+` | addition |
| `-` | subtraction |
| `*` | multiplication |
| `/` | division |
| `%` | remainder (10 divided by 3 leaves 1) |
| `**` | power (`10 ** 3` is 10 power 3 = 1000) |

### Even and odd check
Use `%` to check a number quickly.

```js
console.log(8 % 2); // 0 -> even
console.log(7 % 2); // 1 -> odd
```

Remainder 0 means even. Remainder 1 means odd.

### Increment and decrement
`++` increases by 1. `--` decreases by 1.

```js
let count = 5;
count++; // 6
count--; // 5
```

**Takeaway:** `%` is remainder, `**` is power.

## 2. Assignment operators
To assign a value or update an existing value.

```js
let score = 10;

score += 5; // score = score + 5  -> 15
score -= 3; // score = score - 3  -> 12
score *= 2; // score = score * 2  -> 24
```

**Takeaway:** `+=` is a shortcut for `score = score + 5`.

## 3. Comparison operators
Compare two values. The result is always `true` or `false`.

```js
5 > 3;   // true
5 < 3;   // false
5 >= 5;  // true
5 <= 4;  // false
```

### == vs ===

```js
5 == "5";   // true
5 === "5";  // false
5 != "5";   // false
5 !== "5";  // true
```

| Operator | What it checks |
|----------|----------------|
| `==` | value only (converts the type first) |
| `===` | value and type |
| `!=` | value is not equal |
| `!==` | value or type is not equal |

**Takeaway:** use `===` and `!==`. They are safer and more predictable.

## 4. Logical operators
To combine multiple conditions.

```js
let age = 20;
let hasId = true;

age >= 18 && hasId; // true
age < 18 || hasId;  // true
!hasId;             // false
```

- `&&` is **AND**: both conditions must be true.
- `||` is **OR**: at least one must be true.
- `!` is **NOT**: reverses a Boolean (true becomes false, false becomes true).

| A | B | A AND B | A OR B |
|---|---|---------|--------|
| true | true | true | true |
| true | false | false | true |
| false | true | false | true |
| false | false | false | false |

## 5. Ternary operator
A short form of `if / else`.

```js
// if / else
let result;
if (age >= 18) {
  result = "Adult";
} else {
  result = "Minor";
}

// ternary: one line
let result = age >= 18 ? "Adult" : "Minor";
```

Format:

```js
condition ? valueIfTrue : valueIfFalse
```

If the condition is true, the value after `?` is used. If it is false, the value after `:` is used.

**Takeaway:** use the ternary operator for short, simple if/else.

## Quick recap
- **Arithmetic**: calculations
- **Assignment**: assign or update values
- **Comparison**: compare values
- **Logical**: combine conditions
- **Ternary**: short if/else

## Common mistakes
- Using `==` instead of `===`.
- Mixing up `%` (remainder) and `/` (division).
- Mixing up `&&` (both must be true) and `||` (one is enough).
- Writing `=` (assign) when you meant `===` (compare).

## Challenge
What is the output? Do both lines give the same result?

```js
console.log("5" + 3);
console.log("5" - 3);
```

**Hint:** `+` joins when a string is involved. `-` converts the string to a number.

Answer in the YouTube comments!