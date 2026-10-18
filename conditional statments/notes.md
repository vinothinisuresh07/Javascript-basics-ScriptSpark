# JavaScript Conditionals - Part 1

Notes for the ScriptSpark video on `if`, `if...else`, `else if`, and truthy/falsy values. The code is in `index.js`.

Run it with:

```bash
node index.js
```

## 1. if statement

The block runs only when the condition is `true`. If it is `false`, the block is skipped.

```javascript
let age = 20;

if (age >= 18) {
  console.log("You can vote");
}
```

## 2. if...else

If the condition is `false`, the `else` block runs. Only one of the two blocks ever runs.

```javascript
let age = 15;

if (age >= 18) {
  console.log("You can vote");
} else {
  console.log("You cannot vote yet");
}
```

## 3. else if

Use `else if` to check more than two conditions.

```javascript
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
```

- Conditions are checked from top to bottom.
- The first true condition wins, and the rest are skipped.
- `marks >= 50` is also true for 82, but it is never checked.
- Order matters, so write the highest condition first.

## 4. Truthy and falsy

A condition does not have to be `true` or `false`. JavaScript converts any value to a boolean.

**Falsy values:**

| Value | Meaning |
| --- | --- |
| `0` | zero |
| `""` | empty string |
| `null` | no value |
| `undefined` | not assigned |
| `NaN` | not a number |
| `false` | boolean false |

Everything else is **truthy**, for example `"Hello"`, `1`, `[]`, `{}`.

```javascript
let name = "";

if (name) {
  console.log("Hello " + name);
} else {
  console.log("Please enter your name");
}
```

An empty string is falsy, so the `else` block runs. This is useful for form validation.

## Quick summary

| Statement | Use it when |
| --- | --- |
| `if` | run code only when a condition is true |
| `if...else` | choose between two paths |
| `else if` | choose between many paths, checked in order |
| truthy/falsy | check whether a value exists or is empty |

## Next video

The `switch` statement, `break`, and `if...else` vs `switch`.