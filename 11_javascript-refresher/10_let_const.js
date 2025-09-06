// Using let and const instead of var
let age = 21;             // let = can be reassigned
const name = "Ashken";     // const = cannot be reassigned

console.log("Name:", name);
console.log("Age:", age);

// Reassigning let
age = 20;                 // ✅ works, let can change
console.log("New Age:", age);

// Trying to reassign const
// name = "John";         // ❌ Error: const cannot be reassigned

// Compare with var
var nickname = "Ash";      // old way, can be reassigned
nickname = "Ash-ken";       // ✅ works
console.log("Nickname:", nickname);

/*
Summary:
- let   → can be reassigned, block-scoped
- const → cannot be reassigned, block-scoped
- var   → can be reassigned, function-scoped (less predictable)

Best practice:
- Use const by default
- Use let if the value will change
- Avoid var
*/
