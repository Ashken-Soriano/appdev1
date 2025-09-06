// 1. Array of hobbies and .map()
const hobbies = ["Reading", "Gaming", "Cooking"]; 
hobbies.map(hobby => console.log(hobby)); // si map ginagamit to' para mag ulit ulit sa bawat item ng array 

// 2. Destructuring an object
const student = { name: "Ashken", age: 21 };
const { name, age } = student;
console.log("Name:", name, "Age:", age);

// 3. Spread operator to copy and add elements
const arr = [1, 2, 3];
const newArr = [...arr, 4, 5];
console.log(newArr); // [1, 2, 3, 4, 5]
