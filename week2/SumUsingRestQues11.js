// Exercise: Sum of Numbers using REST Parameter

// Function to Calculate Sum of Numbers

function calculateSum(...numbers) {

    // Using Loop Method

    let totalSum = 0;

    for (let number of numbers) {
        totalSum = totalSum + number;
    }

    // Using Reduce Method

    let reducedSum = numbers.reduce(
        (accumulator, currentValue) => accumulator + currentValue
    );

    return reducedSum;
}

// Function Call

let result = calculateSum(10, 20, 30);

// Displaying Result

console.log("Sum of Numbers:");
console.log(result);