// 1. Object destructuring
const person = {
  name: "Ashken", // replace with your name
  age: 21        // replace with your age
};

const { name, age } = person; // extract values
console.log("Name:", name);   // Ashken
console.log("Age:", age);     // 21

// 2. Array destructuring
const hobbies = ["reading", "coding"]; // replace with your hobbies
const [firstHobby, secondHobby] = hobbies;
console.log("First hobby:", firstHobby);   // reading
console.log("Second hobby:", secondHobby); // coding

// 3. Destructuring in function parameters
function printName({ name }) { // destructure directly in the parameter
  console.log("Hello,", name);
}

printName(person); // Hello, Ashken

// 4. Destructuring arrays in function parameters
function showHobbies([hobby1, hobby2]) {
  console.log(`Hobbies: ${hobby1} and ${hobby2}`);
}

showHobbies(hobbies); // Hobbies: reading and coding
