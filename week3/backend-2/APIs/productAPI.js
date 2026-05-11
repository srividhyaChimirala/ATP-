import express from "express";
import { ProductModel } from "../models/ProductModel.js";

// Creating Router Object
export const productApp = express.Router();

// Create Product
productApp.post("/product", async (req, res) => {

    const newProduct = req.body;

    const newProductDocument = new ProductModel(newProduct);

    const result = await newProductDocument.save();

    console.log("Result:", result);

    res.status(201).json({
        message: "product created"
    });

});

// Get All Products
productApp.get("/product", async (req, res) => {

    // Reading All Products
    const productLists = await ProductModel.find();

    res.status(200).json({
        message: "products",
        payload: productLists
    });

});

// Get Product By ID
productApp.get("/product/:id", async (req, res) => {

    const pid = req.params.id;

    const productobj = await ProductModel.findOne({
        _id: pid
    });

    if (!productobj) {

        return res.status(404).json({
            message: "product not found"
        });

    }

    res.status(200).json({
        message: "product",
        payload: productobj
    });

});

// Update Product
productApp.put("/product/:id", async (req, res) => {

    const modified = req.body;

    const pid = req.params.id;

    const updateproduct = await ProductModel.findByIdAndUpdate(
        pid,
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
        message: "product",
        payload: updateproduct
    });

});

// Delete Product
productApp.delete("/product/:id", async (req, res) => {

    const pid = req.params.id;

    const deletedproduct = await ProductModel.findByIdAndDelete(pid);

    if (!deletedproduct) {

        return res.status(404).json({
            message: "product not found"
        });

    }

    res.status(200).json({
        message: "product deleted",
        payload: deletedproduct
    });

});