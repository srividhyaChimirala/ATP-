// Movie Collection Analyzer

// Movies Data
const movies = [
    { id: 1, title: "Inception", genre: "Sci-Fi", rating: 8.8 },
    { id: 2, title: "Joker", genre: "Drama", rating: 8.4 },
    { id: 3, title: "Avengers", genre: "Action", rating: 8.0 },
    { id: 4, title: "Interstellar", genre: "Sci-Fi", rating: 8.6 }
];

// Displaying All Movies

console.log("All Movies:");
console.log(movies);

// filter() - Only Sci-Fi Movies

const sciFiMovies = movies.filter(
    movie => movie.genre === "Sci-Fi"
);

console.log("\nSci-Fi Movies:");
console.log(sciFiMovies);

// map() - Movie Title with Rating

const movieRatings = movies.map(
    movie => `${movie.title} (${movie.rating})`
);

console.log("\nMovies with Ratings:");
console.log(movieRatings);

// reduce() - Average Movie Rating

const totalRatings = movies.reduce(
    (sum, movie) => sum + movie.rating,
    0
);

const averageMovieRating = totalRatings / movies.length;

console.log("\nAverage Movie Rating:");
console.log(averageMovieRating.toFixed(2));

// find() - Movie Named "Joker"

const jokerMovie = movies.find(
    movie => movie.title === "Joker"
);

console.log("\nMovie Details - Joker:");
console.log(jokerMovie);

// findIndex() - Movie Named "Avengers"

const avengersMovieIndex = movies.findIndex(
    movie => movie.title === "Avengers"
);

console.log("\nIndex of Movie - Avengers:");
console.log(avengersMovieIndex);