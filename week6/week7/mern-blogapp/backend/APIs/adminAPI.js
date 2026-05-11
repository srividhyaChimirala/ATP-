
import exp from "express";
import { verifyToken } from "../middlewares/verifyToken.js";
import { UserModel } from "../models/userModel.js";

// mini express app
export const adminApp = exp.Router();


// admin login - done


// Read all users and authors
adminApp.get("/all", verifyToken("ADMIN"), async (req, res) => {
  // get all users email except admin
  const allowedRoles = ["USER", "AUTHOR"];

  const usersList = await UserModel.find(
    { role: allowedRoles },
    { email: 1 }
  );

  // send response
  res.status(200).json({
    message: "Users and Authors",
    payload: usersList,
  });
});


// Block or Activate user or author
adminApp.patch("/all", verifyToken("ADMIN"), async (req, res) => {
  // get user email from request body
  const { email, isActive } = req.body;

  // get user from email
  const user = await UserModel.findOne({ email });

  // if user not found
  if (!user) {
    return res.status(404).json({
      message: "User not found",
    });
  }

  // check its status is same or not
  if (isActive === user.isUserActive) {
    return res.status(400).json({
      message: "User already in the same state",
    });
  }

  // change status
  user.isUserActive = isActive;

  // save
  await user.save();

  // send response
  res.status(200).json({
    message: "User state updated",
  });
});
