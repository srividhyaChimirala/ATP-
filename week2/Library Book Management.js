// Create a Book class and use it to manage a collection of books in a library.

class Book {
    title;
    author;
    pages;
    isAvailable;

    constructor(title, author, pages, isAvailable) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.isAvailable = isAvailable;
    }

    borrow() {
        console.log(`${this.title} is borrowed`);
        this.isAvailable = false;
    }

    returnBook() {
        console.log(`${this.title} is returned`);
        this.isAvailable = true;
    }

    getInfo() {
        console.log(
            `${this.title} written by ${this.author} (${this.pages} pages)`
        );
    }

    isLongBook() {
        if (this.pages > 300) {
            console.log("Long Book");
        } else {
            console.log("Not a long book");
        }
    }
}

// Creating Book Objects

let b1 = new Book("Ramayana", "Valmiki", 800, true);

let b2 = new Book("MahaBharatha", "Vyasa", 800, true);

let b3 = new Book("RamaCharithaManas", "Tulsidas", 400, false);

let b4 = new Book("Sundarakanda", "Valmiki", 250, true);

let b5 = new Book("Bhagavatham", "Vyasa", 500, false);

// Displaying Book Information

b1.getInfo();
b2.getInfo();
b3.getInfo();
b4.getInfo();
b5.getInfo();

// Borrowing Books

b1.borrow();

console.log(
    "Availability of ",
    b1.title,
    " : ",
    b1.isAvailable
);

b4.borrow();

console.log(
    "Availability of ",
    b4.title,
    " : ",
    b4.isAvailable
);

// Returning Book

b4.returnBook();

console.log(
    "Availability of ",
    b4.title,
    " : ",
    b4.isAvailable
);

// Array of Books

let arr = [b1, b2, b3, b4, b5];

// Counting Books with More Than 300 Pages

let count = 0;

for (let i = 0; i < arr.length; i++) {
    if (arr[i].pages > 300) {
        count++;
    }
}

console.log(
    "no.of books with >300 pages :",
    count
);

// Displaying Available Books

console.log("Available books : ");

for (let i = 0; i < arr.length; i++) {
    if (arr[i].isAvailable === true) {
        arr[i].getInfo();
    }
}