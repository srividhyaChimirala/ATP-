// Shopping Cart Analyzer

// Cart Data
const cart = [
    {
        id: 101,
        name: "Laptop",
        price: 60000,
        quantity: 1,
        inStock: true
    },

    {
        id: 102,
        name: "Mouse",
        price: 800,
        quantity: 2,
        inStock: true
    },

    {
        id: 103,
        name: "Keyboard",
        price: 1500,
        quantity: 1,
        inStock: false
    },

    {
        id: 104,
        name: "Monitor",
        price: 12000,
        quantity: 1,
        inStock: true
    }
];

// Displaying All Cart Products
console.log("All Cart Products:");
console.log(cart);

// filter() - In Stock Products
const inStockProducts = cart.filter(
    product => product.inStock
);

console.log("\nIn Stock Products:");
console.log(inStockProducts);

// map() - Product Name and Total Price
const productSummary = cart.map(product => {

    return {
        name: product.name,
        totalPrice: product.price * product.quantity
    };

});

console.log("\nProduct Summary:");
console.log(productSummary);

// reduce() - Grand Total Calculation
const grandTotal = cart.reduce(
    (total, product) =>
        total + (product.price * product.quantity),
    0
);

console.log("\nGrand Total:");
console.log(grandTotal);

// find() - Product Named "Mouse"
const mouseProduct = cart.find(
    product => product.name === "Mouse"
);

console.log("\nDetails of Product - Mouse:");
console.log(mouseProduct);

// findIndex() - Product Named "Keyboard"
const keyboardIndex = cart.findIndex(
    product => product.name === "Keyboard"
);

console.log("\nIndex of Product - Keyboard:");
console.log(keyboardIndex);