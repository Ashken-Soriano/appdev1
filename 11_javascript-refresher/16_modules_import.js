// Import default and named exports from 15_modules_export.js
import greet from './15_modules_export.js';
import { userInfo } from './15_modules_export.js';

// Use them
console.log(greet()); // Hello!
console.log(`Name: ${userInfo.name}, Age: ${userInfo.age}`); // Name: Ashken, Age: 21
