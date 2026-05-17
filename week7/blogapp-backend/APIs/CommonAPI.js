import exp from "express";
import { UserModel } from "../models/UserModel.js";
import { hash, compare } from "bcryptjs";
import { config } from "dotenv";
import jwt from "jsonwebtoken";
import { verifyToken } from "../middlewares/VerifyToken.js";
import { upload } from "../config/multer.js";
import { uploadToCloudinary } from "../config/cloudinaryUpload.js";
import cloudinary from "../config/cloudinary.js";

config();

const { sign } = jwt;

export const commonApp = exp.Router();

// Route for Register
commonApp.post(
  "/users",
  upload.single("profileImageUrl"),
  async (req, res,next) => {
    let cloudinaryResult;

    try {
      let allowedRoles = ["USER", "AUTHOR"];

      // get user from req
      const newUser = req.body;

      console.log(newUser);
      console.log(req.file);

      // check role
      if (!allowedRoles.includes(newUser.role)) {
        return res.status(400).json({
          message: "Invalid role",
        });
      }

      // Upload image to cloudinary
      if (req.file) {
        cloudinaryResult = await uploadToCloudinary(
          req.file.buffer
        );
      }

      console.log("cloudinaryResult", cloudinaryResult);

      // add image url
      newUser.profileImageUrl =
        cloudinaryResult?.secure_url || "";

      // hash password
      newUser.password = await hash(
        newUser.password,
        12
      );

      // create user document
      const newUserDoc = new UserModel(newUser);

      // save user
      await newUserDoc.save();

      // send response
      res.status(201).json({
        success: true,
        message: "User created",
      });
    } catch (err) {
      console.log("REGISTER ERROR:", err);

      // delete uploaded image if exists
      if (cloudinaryResult?.public_id) {
        await cloudinary.uploader.destroy(
          cloudinaryResult.public_id
        );
      }

      res.status(500).json({
        success: false,
        message: err.message,
      });
    }
  }
);

// Route for Login
commonApp.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // find user
    const user = await UserModel.findOne({
      email: email,
    });

    if (!user) {
      return res.status(400).json({
        message: "Invalid email",
      });
    }
    if (!user.isUserActive) {
  return res.status(403).json({
    message: "Your account is blocked",
  });
}

    // compare password
    const isMatched = await compare(
      password,
      user.password
    );

    if (!isMatched) {
      return res.status(400).json({
        message: "Invalid password",
      });
    }

    // create jwt token
    const signedToken = sign(
      {
        id: user._id,
        email: email,
        role: user.role,
        firstName: user.firstName,
        lastName: user.lastName,
        profileImageUrl: user.profileImageUrl,
      },
      process.env.SECRET_KEY,
      {
        expiresIn: "1h",
      }
    );

    // // set cookie
    // res.cookie("token", signedToken, {
    //   httpOnly: true,
    //   secure: false,
    //   sameSite: "lax",
    // });
    res.cookie("token", signedToken, {
  httpOnly: true,
  secure: true,
  sameSite: "none",
});

    // remove password
    let userObj = user.toObject();
    delete userObj.password;

    // send response
    res.status(200).json({
      message: "login success",
      payload: userObj,
    });
  } catch (err) {
    console.log(err);

    res.status(500).json({
      message: err.message,
    });
  }
});

// Route for Logout
commonApp.get("/logout", (req, res) => {
  // res.clearCookie("token", {
  //   httpOnly: true,
  //   secure: false,
  //   sameSite: "lax",
  // });
  res.clearCookie("token", {
  httpOnly: true,
  secure: false,
  sameSite: "lax",
});

  res.status(200).json({
    message: "Logout success",
  });
});

// Check Auth
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

// Change Password
commonApp.put(
  "/password",
  verifyToken("USER", "AUTHOR", "ADMIN"),
  async (req, res) => {
    try {
      const { currentPassword, newPassword } =
        req.body;

      // check passwords
      if (currentPassword === newPassword) {
        return res.status(400).json({
          message:
            "Current password and new password cannot be same",
        });
      }

      // get user
      const userId = req.user?.id;

      const user = await UserModel.findById(userId);

      if (!user) {
        return res.status(404).json({
          message: "User not found",
        });
      }

      // compare current password
      const isMatched = await compare(
        currentPassword,
        user.password
      );

      if (!isMatched) {
        return res.status(400).json({
          message: "Invalid password",
        });
      }

      // hash new password
      const newHashedPassword = await hash(
        newPassword,
        12
      );

      // update password
      user.password = newHashedPassword;

      await user.save();

      // send response
      res.status(200).json({
        message: "Password changed",
      });
    } catch (err) {
      console.log(err);

      res.status(500).json({
        message: err.message,
      });
    }
  }
);
