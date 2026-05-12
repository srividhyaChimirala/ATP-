import exp from "express";
import { connect } from "mongoose";
import cors from "cors";

import { empRoute } from "./API/empApp.js";

const app = exp();

// Add CORS middleware
app.use(
  cors({
    origin: ["http://localhost:5173"],
  })
);

// Body parser middleware
app.use(exp.json());

// Employee API middleware
app.use("/emp-api", empRoute);

// Database Connection
const connectDB = async () => {
  try {
   // await connect("mongodb://localhost:27017/empdb");
await connect(process.env.MONGO_URL);
    console.log("DB connected");

    app.listen(4000, () => {
      console.log("Server listening on port 4000...");
    });
  } catch (err) {
    console.log("Error in DB connection:", err.message);
  }
};

connectDB();

// Error handling middleware
app.use((err, req, res, next) => {
  console.log("Error in middleware:", err.message);

  res.status(err.status || 500).json({
    message: "Error",
    reason: err.message,
  });
});
