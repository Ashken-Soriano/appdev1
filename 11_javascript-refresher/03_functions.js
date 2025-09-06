function greet(name) {
    return "Hello, " + name + "! Welcome to the Javascript!";
}

console.log(greet("Ashken")); // Output: Hello, Ashken!


// ------------------------------------
const square = (num) => {
    return num * num;
}
console.log(square(5)); // Output: 25

// -------------------------------------
function calculator(a, b) {
    let sum = a + b;
    let product = a * b;
    return { sum: sum, product: product }; // return as an object
}

// Example usage
let result = calculator(4, 5);
console.log("Sum:", result.sum);         // Output: 9
console.log("Product:", result.product); // Output: 20
