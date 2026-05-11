
import express from "express";
import { connect } from "mongoose";
import { userApp } from "./APIs/userAPI.js";
import { productApp } from "./APIs/productAPI.js";
import cookieParser from "cookie-parser";
import { config } from "dotenv";

config(); // process.env.PORT

const app = express();


// Body Parser Middleware
app.use(express.json());


// Cookie Parser Middleware
app.use(cookieParser());


// User API Routes
app.use("/user-api", userApp);


// Product API Routes
app.use("/product-api", productApp);


// Port Number
const port = process.env.PORT || 4000;


// Connect To Database
async function connectDB() {

    try {

        await connect(process.env.DB_URL);

        console.log("DB connection success");

        // Connect To HTTP Server
        app.listen(port, () => {

            console.log(
                `Server running successfully on port ${port}`
            );

        });

    }
    catch (err) {

        console.log(
            "Error in DB connection:",
            err
        );

    }

}

connectDB();


// Error Handling Middleware
app.use((err, req, res, next) => {

    console.log(err.name);

    // Validation Error
    if (err.name === "ValidationError") {

        return res.status(400).json({
            message: "error occurred",
            error: err.message
        });

    }

    // Cast Error
    if (err.name === "CastError") {

        return res.status(400).json({
            message: "error occurred",
            error: err.message
        });

    }

    // Server Side Errors
    res.status(500).json({
        message: "error occurred",
        error: err.message
    });

});


// Error Object
// error => name, message, callstack

// Duplicate User Identification
