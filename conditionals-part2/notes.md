# JavaScript Conditionals, Part 2

Topics: `switch`, `case`, `break`, `default`, fall-through, if-else vs switch.

Run the examples: `node index.js`

## Why switch?

A long `else if` chain checks the same variable again and again. `switch` compares one value against many options in a cleaner way.

## Syntax

```js
switch (value) {
  case option1:
    // runs if value matches option1
    break;
  case option2:
    // runs if value matches option2
    break;
  default:
    // runs if nothing matches
}
```

| Keyword   | Meaning                               |
| --------- | ------------------------------------- |
| `case`    | One possible match                    |
| `break`   | Stop here, leave the switch           |
| `default` | Runs when no case matches (put last)  |

## Example

```js
let day = 3;

switch (day) {
  case 1: console.log("Monday"); break;
  case 2: console.log("Tuesday"); break;
  case 3: console.log("Wednesday"); break;
  default: console.log("Invalid day");
}
// Wednesday
```

## break matters

- With `break`: only the matching case runs.
- Without `break`: the matching case runs, **and every case below it** (until a `break` or the end). This is called **fall-through**.

```js
let day = 2;

switch (day) {
  case 2:
    console.log("Tuesday");
  case 3:
    console.log("Wednesday");
}
// Tuesday
// Wednesday
```

Tip: if your output has extra values, check for a missing `break` first.

## Grouping cases

Fall-through can be useful when two cases share the same code.

```js
switch (day) {
  case 6:
  case 7:
    console.log("Weekend");
    break;
  default:
    console.log("Weekday");
}
```

## How switch decides

1. Compare the value with each `case`, top to bottom.
2. On a match, run that block until `break`.
3. If nothing matches, run `default`.

## if-else vs switch

| Use `switch` when                    | Use `if-else` when                       |
| ------------------------------------ | ---------------------------------------- |
| One value, many exact options        | Ranges and complex conditions            |
| Day number, menu choice, grade letter | `marks >= 90`, `age > 18 && hasId`       |

**Rule:** exact match, use `switch`. Range, use `if-else`.

## Good to know

`switch` compares with strict equality (`===`), so the number `1` and the string `"1"` are not the same case.

## Challenge

Remove every `break` from the day-name example and set `day = 3`. What is the output?

<details>
<summary>Answer</summary>

```
Wednesday
Invalid day
```

After `case 3` matches, there is no `break`, so it falls into `default` and that runs too.

</details>

## Next

Loops.