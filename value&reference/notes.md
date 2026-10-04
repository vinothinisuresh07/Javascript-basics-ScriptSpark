# Episode 3: JavaScript Values vs References

**Video:** <https://youtu.be/EkzhgPpE5p8?si=sC_TeXJEywEEjp9Q>

## Why this matters
Understanding this helps you debug faster and answer common interview questions.

## The hook

```js
let arr1 = [1, 2, 3];
let arr2 = arr1;
arr2.push(4);
console.log(arr1); // [1, 2, 3, 4]  <- arr1 changed too!
```

We changed `arr2`, but `arr1` changed. The reason is how JavaScript handles values and references.

## Primitives = copy by value
String, Number, Boolean, Symbol, Undefined, Null, BigInt.

Think of photocopying a phone number on paper. If your friend changes their copy, your original paper does not change.

```js
let a = 10;
let b = a; // copy of the value
b = 20;
console.log(a); // 10
console.log(b); // 20
```

```
After line 1:   a = 10
After line 2:   a = 10, b = 10   (copy)
After line 3:   a = 10, b = 20   (only b changed)
```

**Primitive -> Copy by Value -> both are independent**

## Objects and arrays = copy by reference
Object, Array and Function are reference types. The variable does not store the data itself. It stores the memory address of the data.

```js
const user1 = { name: "Vinothini" };
const user2 = user1;
user2.name = "Ram";
console.log(user1.name); // "Ram"
```

`user2 = user1` does not copy the object. It copies the address, so both variables point to the same object.

**Object / Array -> Copy by Reference -> both point to the same data**

## Comparison gotcha

```js
console.log("a" === "a"); // true
console.log({} === {});   // false
```

- Primitives are compared by **value**.
- Objects are compared by **address**. Two `{}` are two different memory locations.
- Same reference gives `true`:

```js
const x = {};
const y = x;
console.log(x === y); // true
```

## How to copy properly

Think of a big box with a small box inside it.
- **Shallow copy:** only the outer box is copied. The inner box is shared.
- **Deep copy:** the inner box is copied too. Nothing is shared.

### Shallow copy: spread operator

```js
const user = { name: "Vinothini", skills: ["JS"] };
const copy = { ...user };

copy.name = "Ram";
console.log(user.name); // "Vinothini" (safe, name is a primitive)

copy.skills.push("React");
console.log(user.skills); // ["JS", "React"] (changed! skills is shared)
```

Shallow copy: top-level values are separate, nested objects are shared.

### Deep copy: structuredClone

```js
const original = { name: "Vinothini", skills: ["JS"] };
const deep = structuredClone(original);

deep.skills.push("Node");
console.log(original.skills); // ["JS"] (safe)
```

If your data is nested and you need a fully separate copy, use `structuredClone()`.

## Quick recap

| Type | Behavior |
|------|----------|
| Primitive | Copy by value |
| Object, Array | Copy by reference |
| Copy safely | Spread (shallow) or `structuredClone` (deep) |

- `const` only blocks **reassignment**. Changing something inside an object (mutation) still works with `const`.

## Common mistakes
- Thinking `let b = a` makes a separate copy of an array or object.
- Thinking the spread operator copies nested objects too. It only copies the top level.
- Thinking `{} === {}` is `true`.
- Thinking `const` makes an object unchangeable.

## Quiz
What is the output?

```js
let a = [1, 2];
let b = [...a];
b.push(3);
console.log(a); // ?
```

Answer in the YouTube comments!