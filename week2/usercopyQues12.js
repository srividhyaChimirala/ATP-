// Exercise: Update User Object

// Original User Object

let user = {
    name: "Ravi",
    city: "Hyderabad"
};

// Creating a New Object using Spread Operator
// and adding a new property: age

let updatedUser = {
    ...user,
    age: 25
};

// Displaying Objects

console.log("Original User Object:");
console.log(user);

console.log("\nUpdated User Object:");
console.log(updatedUser);