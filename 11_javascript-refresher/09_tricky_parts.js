// 1. Pagkakaiba ng == at ===
let a = "5"; // string, parang salita lang na "5"
let b = 5;   // number, bilang talaga na 5

console.log(a == b);  // true
// Ang == ay parang “basta pareho ang itsura, ok na yan”
// Kaya yung "5" (teksto) at 5 (bilang) ay itinuring na magkapareho

console.log(a === b); // false
// Ang === naman ay mas maarte, “hoy, dapat parehong itsura AT parehong klase”
// Kaya hindi pwede ang string "5" at number 5, kaya false

// 2. undefined vs null
let x;        // undefined: ginawa yung variable pero wala pang laman
let y = null; // null: sinadyang walang laman, parang bakanteng upuan

console.log(x); // undefined
console.log(y); // null
// Parang ganito: undefined = "nakalimutan mong lagyan ng gamit yung kahon"
// null = "sinadya mong walang laman yung kahon"

// 3. Regular function vs arrow function sa loob ng object
const obj = {
    name: "Alice",
    regular: function() { console.log(this.name); },
    arrow: () => { console.log(this.name); }
};

obj.regular(); // Alice
// Regular function: gumagana yung this dito, kaya kilala niya si "Alice"

obj.arrow();   // undefined
// Arrow function: medyo pasaway, hindi niya dala yung this
// Parang nagtatanong ka sa kapitbahay kung anong pangalan mo — syempre wala siyang alam, kaya undefined

// 4. Pagkopya ng arrays gamit =
let arr1 = [1, 2, 3];
let arr2 = arr1;    // pareho lang silang tumuturo sa iisang plato
arr2.push(4);
console.log(arr1);  // [1, 2, 3, 4]
// Dahil iisang plato lang yung pinaghahatian nila, nadagdagan din yung kay arr1

// 5. Pagkopya ng arrays gamit spread operator
let arr3 = [1, 2, 3];
let arr4 = [...arr3]; // kumuha ng sariling plato (bagong kopya)
arr4.push(4);
console.log(arr3); // [1, 2, 3]  -> hindi nadagdagan yung orihinal
console.log(arr4); // [1, 2, 3, 4] -> yung bagong plato lang ang may dagdag
