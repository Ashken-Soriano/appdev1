// 1. One parameter, explicit return
const greet = (name) => {
  return "Hello, " + name;
};
console.log(greet("Ashken")); // Hello, Ashken

// 2. One parameter, implicit return
const square = n => n * n; // no braces needed, automatically returns
console.log(square(5)); // 25

// 3. No parameters, explicit body
const sayHi = () => {
  console.log("Hi!");
};
sayHi(); // Hi!
// ginagamit pala to kapag ung function mo ay short lang ung, para mas madali basahin