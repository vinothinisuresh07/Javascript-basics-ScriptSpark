# Episode 1: JavaScript Intro + Variables

**Video:** <https://youtu.be/Gv6y-RuZnWE?si=FvOyoNRtHIqj4rrk>

## What is JavaScript?
- A programming language that makes websites interactive.
- HTML = structure, CSS = appearance, JavaScript = behavior.
- Examples: button clicks, form validation, live updates, animations.
- Runs directly in the browser. No install needed: press `F12` -> **Console** tab.
- With **Node.js**, JavaScript can also run on the server. So you can build frontend and backend with the same language (full-stack).

## What is a variable?
A labeled box that stores a value. Give it a name, then use that name to get the value later.

```js
let age = 20;
console.log(age); // 20
```

## let, const, var

| | Reassign | Redeclare (same scope) | Value needed at declaration |
|---|---|---|---|
| `let` | Yes | No (error) | No |
| `const` | No (error) | No (error) | Yes |
| `var` | Yes | Yes | No |

### let
Use it when the value will change later (score, login status).

```js
let score = 0;
score = 10; // works
```

### const
Use it when the value should not change (app name, username).

```js
const appName = "Two Stacks";
// appName = "New Name";  -> Error: Assignment to constant variable.
// const city;            -> Error: Missing initializer
```

### var
The older way of declaring variables. Common in old code, but modern JavaScript prefers `let` and `const`, because `var` lets you redeclare the same variable by mistake.

```js
var oldAge = 20;
var oldAge = 30; // no error
```

## How to choose
Think about how the value will behave in the future.
- Will it change? Use `let`.
- Will it stay the same? Use `const`.
- Writing new code? Avoid `var`.

## Common mistakes
- Using `let` when the value never changes. Use `const`.
- Forgetting to give `const` a value when declaring it.
- Redeclaring the same variable name in the same scope.

## Try it yourself
Open the Console and test: reassign a `let`, a `const` and a `var`, then redeclare each one. Which keyword works and which gives an error?

**Next video:** Conditionals (`if` / `else`)