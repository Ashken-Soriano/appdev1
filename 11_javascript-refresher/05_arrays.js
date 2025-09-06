let favoriteFoods = ["Paksiw", "Adobo", "Sinigang"];
console.log("Original foods:", favoriteFoods);

favoriteFoods.push("Burger"); // push is use to add items at the end of the array, basically nag aadd siya
console.log("After adding a food:", favoriteFoods);

favoriteFoods.shift(); // eto shift for removing the first item sa array
console.log("After removing the first food:", favoriteFoods);

//  Use for...of loop to print each food
console.log("Printing each food:");
for (let food of favoriteFoods) { // dito ung "food" temporary variable lang to hold each item in the array 
    console.log(food); // and also ginamit den natin dito ung let..of loop
}

// Use .map() to create a new array with "I like ___"
let likes = favoriteFoods.map(food => "I like " + food);
console.log("Array with likes:", likes); // dito naman ung .map() method to create a new array based on the original array, tapos ung arrow function naman to define how each item should be transformed in the new array
