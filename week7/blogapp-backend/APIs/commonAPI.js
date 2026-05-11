import exp from "express";
import { UserModel } from "../models/UserModel.js";
import { hash, compare } from "bcryptjs";
import { config } from "dotenv";
import jwt from "jsonwebtoken";
import { verifyToken } from "../middlewares/VerifyToken.js";
import { upload } from "../config/multer.js";
import { uploadToCloudinary } from "../config/cloudinaryUpload.js";
import cloudinary from "../config/cloudinary.js";

const { sign } = jwt;

config();

export const commonApp = exp.Router();


// Route for register
commonApp.post(
  "/users",
  upload.single("profileImageUrl"),
  async (req, res, next) => {
    let cloudinaryResult;

    try {
      const allowedRoles = ["USER", "AUTHOR"];

      // get user from request
      const newUser = req.body;

      console.log(newUser);
      console.log(req.file);

      // check role
      if (!allowedRoles.includes(newUser.role)) {
        return res.status(400).json({ message: "Invalid role" });
      }

      // upload image to cloudinary
      if (req.file) {
        cloudinaryResult = await uploadToCloudinary(req.file.buffer);
      }

      // attach image URL
      newUser.profileImageUrl = cloudinaryResult?.secure_url;

      // hash password
      newUser.password = await hash(newUser.password, 12);

      // create user document
      const newUserDoc = new UserModel(newUser);

      // save
      await newUserDoc.save();

      res.status(201).json({ message: "User created" });
    } catch (err) {
      console.log("err is", err);

      // rollback cloudinary upload if failed
      if (cloudinaryResult?.public_id) {
        await cloudinary.uploader.destroy(cloudinaryResult.public_id);
      }

      next(err);
    }
  }
);


// Route for login (USER, AUTHOR, ADMIN)
commonApp.post("/login", async (req, res) => {
  const { email, password } = req.body;

  // find user
  const user = await UserModel.findOne({ email });

  if (!user) {
    return res.status(400).json({ message: "Invalid email" });
  }

  // compare password
  const isMatched = await compare(password, user.password);

  if (!isMatched) {
    return res.status(400).json({ message: "Invalid password" });
  }

  // create JWT
  const signedToken = sign(
    {
      id: user._id,
      email: user.email,
      role: user.role,
      firstName: user.firstName,
      lastName: user.lastName,
      profileImageUrl: user.profileImageUrl,
    },
    process.env.SECRET_KEY,
    { expiresIn: "1h" }
  );

  // set cookie
  res.cookie("token", signedToken, {
    httpOnly: true,
    secure: false,
    sameSite: "lax",
  });

  // remove password
  const userObj = user.toObject();
  delete userObj.password;

  res.status(200).json({
    message: "login success",
    payload: userObj,
  });
});


// Logout
commonApp.get("/logout", (req, res) => {
  res.clearCookie("token", {
    httpOnly: true,
    secure: false,
    sameSite: "lax",
  });

  res.status(200).json({ message: "Logout success" });
});


// Check auth (page refresh)
commonApp.get(
  "/check-auth",
  verifyToken("USER", "AUTHOR", "ADMIN"),
  (req, res) => {
    res.status(200).json({
      message: "authenticated",
      payload: req.user,
    });
  }
);


// Change password
commonApp.put("/password", verifyToken(), async (req, res) => {
  const { currentPassword, newPassword } = req.body;

  // same password check
  if (currentPassword === newPassword) {
    return res.status(400).json({
      message: "Current password and new password cannot be same",
    });
  }

  const userId = req.user?.id;

  // find user
  const user = await UserModel.findById(userId);

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  // compare password
  const isMatch = await compare(currentPassword, user.password);

  if (!isMatch) {
    return res.status(400).json({ message: "Invalid password. Try again" });
  }

  // hash new password
  const newHashedPassword = await hash(newPassword, 12);

  // update password
  user.password = newHashedPassword;

  await user.save();

  res.status(200).json({ message: "Password changed" });
});