
// Create Mini Express App (Separate Route)

import express from "express";
import { UserModel } from "../models/UserModel.js";
import { hash, compare } from "bcryptjs";
import jwt from "jsonwebtoken";
import { VerifyToken } from "../middlewares/verifytoken.js";

const { sign } = jwt;

// Mini Express Router
export const userApp = express.Router();


// User Login
userApp.post("/auth", async (req, res) => {

    // Get User Credentials
    const { email, password } = req.body;

    // Verify Email
    let user = await UserModel.findOne({
        email: email
    });

    // If Email Does Not Exist
    if (user === null) {

        return res.status(404).json({
            message: "Invalid email"
        });

    }

    // Compare Passwords
    let result = await compare(password, user.password);

    // If Password Does Not Match
    if (result === false) {

        return res.status(400).json({
            message: "Invalid password"
        });

    }

    // Create JWT Token
    const signedToken = sign(
        {
            email: user.email
        },
        process.env.SECRET_KEY,
        {
            expiresIn: 10
        }
    );

    // Send Token in Cookie
    res.cookie("token", signedToken, {
        httpOnly: true,
        sameSite: "lax",
        secure: false
    });

    res.status(200).json({
        message: "login success",
        payload: user
    });

});


// Create New User
userApp.post("/users", async (req, res) => {

    // Get New User Data
    const newUser = req.body;

    // Hash Password
    const hashedPassword = await hash(
        newUser.password,
        10
    );

    // Replace Plain Password
    newUser.password = hashedPassword;

    // Create New User Document
    const newUserDocument = new UserModel(newUser);

    // Save User
    const result = await newUserDocument.save();

    console.log("Result:", result);

    // Send Response
    res.status(201).json({
        message: "user created"
    });

});


// Read All Users
userApp.get("/users", VerifyToken, async (req, res) => {

    // Read All Users
    let userLists = await UserModel.find();

    res.status(200).json({
        message: "users",
        payload: userLists
    });

});


// Read User By ID
userApp.get("/users/:id", VerifyToken, async (req, res) => {

    // Read User Email From Request
    const emailOfUser = req.user?.email;

    // Find User
    const userObj = await UserModel.findOne({
        email: emailOfUser
    }).populate("cart.product");

    // If User Not Found
    if (!userObj) {

        return res.status(404).json({
            message: "user not found"
        });

    }

    // Send Response
    res.status(200).json({
        message: "user",
        payload: userObj
    });

});


// Update User By ID
userApp.put("/users/:id", VerifyToken, async (req, res) => {

    // Get Modified User Data
    const modified = req.body;

    const uid = req.params.id;

    // Find User By ID And Update
    const updateUser = await UserModel.findByIdAndUpdate(
        uid,
        {
            $set: {
                ...modified
            }
        },
        {
            new: true,
            runValidators: true
        }
    );

    res.status(200).json({
        message: "user",
        payload: updateUser
    });

});


// Delete User By ID
userApp.delete("/users/:id", VerifyToken, async (req, res) => {

    const uid = req.params.id;

    let deletedUser = await UserModel.findByIdAndDelete(uid);

    // If User Not Found
    if (!deletedUser) {

        return res.status(404).json({
            message: "user not found"
        });

    }

    res.status(200).json({
        message: "user deleted",
        payload: deletedUser
    });

});


// Add Product To Cart
userApp.put(
    "/cart/product-id/:pid",
    VerifyToken,
    async (req, res) => {

        let productId = req.params.pid;

        // Get Current User Email
        const emailOfUser = req.user?.email;

        // Get User From Database
        const user = await UserModel.findOne({
            email: emailOfUser
        });

        // If User Not Found
        if (!user) {

            return res.status(404).json({
                message: "user not found"
            });

        }

        // Add Product To Cart
        let result = await UserModel.findOneAndUpdate(
            {
                email: emailOfUser
            },
            {
                $push: {
                    cart: {
                        product: productId
                    }
                }
            }
        );

        console.log(result);

        res.status(200).json({
            message: "product added to cart"
        });

    }
);


// Remove Product From Cart
userApp.put(
    "/cart/remove-product/:pid",
    VerifyToken,
    async (req, res) => {

        let productId = req.params.pid;

        // Get Current User Email
        const emailOfUser = req.user?.email;

        // Get User From Database
        const user = await UserModel.findOne({
            email: emailOfUser
        });

        // If User Not Found
        if (!user) {

            return res.status(404).json({
                message: "user not found"
            });

        }

        // Remove Product From Cart
        let result = await UserModel.findOneAndUpdate(
            {
                email: emailOfUser
            },
            {
                $pull: {
                    cart: {
                        product: productId
                    }
                }
            }
        );

        if (!result) {

            return res.json({
                message: "product is already removed"
            });

        }

        console.log(result);

        res.status(200).json({
            message: "product removed from cart"
        });

    }
);

