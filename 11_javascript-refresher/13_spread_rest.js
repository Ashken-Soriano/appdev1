// Spread with arrays
const numbers = [1, 2, 3];
const moreNumbers = [...numbers, 4, 5];
console.log(moreNumbers); // [1, 2, 3, 4, 5]

// Spread with objects
const user = { name: "Ashken", age: 21 };
const updatedUser = { ...user, country: "Philippines" };
console.log(updatedUser); // { name: "Ashken", age: 21, country: "Philippines" }

// Rest operator in function
function sumAll(...nums) {
  return nums.reduce((a, b) => a + b, 0);
}
console.log(sumAll(1, 2, 3)); // 6
console.log(sumAll(5, 10, 15)); // 30
