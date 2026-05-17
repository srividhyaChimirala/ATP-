import exp from "express";
import { UserModel } from "../models/UserModel.js";
import { verifyToken } from "../middlewares/VerifyToken.js";

export const adminApp = exp.Router();

// Middleware: Admin-only
const adminOnly = (req, res, next) => {
  if (req.user.role !== "ADMIN") {
    return res.status(403).json({ message: "Access denied. Admins only." });
  }
  next();
};

// Apply middleware
adminApp.use(verifyToken("ADMIN"), adminOnly);

// GET /admin-api/details
adminApp.get("/details", async (req, res) => {
  try {
    const users = await UserModel.find(
      { role: { $in: ["USER", "AUTHOR"] } },
      { email: 1, role: 1, isUserActive: 1, _id: 1 }
    );

    res.status(200).json({
      message: "Users fetched",
      payload: users, 
    });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

// PATCH /admin-api/block/:id
adminApp.patch("/block/:id", async (req, res) => {
  try {
    const user = await UserModel.findById(req.params.id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    if (user.role === "ADMIN") {
      return res.status(403).json({ message: "Cannot block admin" });
    }

    user.isUserActive = !user.isUserActive;
    await user.save();

    res.status(200).json({
      message: `User ${user.isUserActive ? "activated" : "blocked"}`,
    });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});