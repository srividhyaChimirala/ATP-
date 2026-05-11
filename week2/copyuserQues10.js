//  Copy & Extend an Array

// Original Fruits Array

let fruits = ["apple", "banana"];

// Additional Fruits Array

let additionalFruits = ["grapes", "guava"];

// Creating a New Array using Spread Operator

let combinedFruits = [
    ...fruits,
    ...additionalFruits,
    "orange"
];

// Displaying Arrays

console.log("Original Fruits Array:");
console.log(fruits);

console.log("\nAdditional Fruits Array:");
console.log(additionalFruits);

console.log("\nCombined Fruits Array:");
console.log(combinedFruits);