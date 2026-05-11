// Hands-On 2: Deep Copy (Isolation & Safety)

// Original Order Object
const order = {
    orderId: "ORD1001",

    customer: {
        name: "Anita",

        address: {
            city: "Hyderabad",
            pincode: 500085
        }
    },

    items: [
        {
            product: "Laptop",
            price: 70000
        }
    ]
};

// Creating Deep Copy Using structuredClone()

const copiedOrder = structuredClone(order);

// Modifying Copied Object

// Updating customer city
copiedOrder.customer.address.city = "Mumbai";

// Updating product price
copiedOrder.items[0].price = 20000;

// Displaying Results

console.log("Original Order Object:");
console.log(order);

console.log("\nCopied & Modified Order Object:");
console.log(copiedOrder);