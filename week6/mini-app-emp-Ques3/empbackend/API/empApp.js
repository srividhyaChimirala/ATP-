import exp from "express";
import { EmpModel } from "../models/EmpModel.js";

export const empRoute = exp.Router();

// Create Employee
empRoute.post("/employees", async (req, res) => {
  const newEmp = req.body;

  const empDoc = new EmpModel(newEmp);
  await empDoc.save();

//   res.status(200).json({
//     message: "Employee created",
//   });
// });
  res.status(201).json({
  message: "Employee created",
});

// Read All Employees
empRoute.get("/employees", async (req, res) => {
  const empList = await EmpModel.find();

  res.status(200).json({
    message: "List of employees",
    payload: empList,
  });
});

// Update Employee By ID
empRoute.put("/employees/:id", async (req, res) => {
  const modifiedEmp = req.body;

  // Find and update employee
  const updatedEmp = await EmpModel.findByIdAndUpdate(
    req.params.id,
    {
      $set: {
        ...modifiedEmp,
      },
    },
    {
      returnDocument: "after",
    }
  );

  if (!updatedEmp) {
    return res.status(404).json({
      message: "Employee not found",
    });
  }

  res.status(200).json({
    message: "Employee updated",
    payload: updatedEmp,
  });
});

// Delete Employee By ID
empRoute.delete("/employees/:id", async (req, res) => {
  const deletedEmp = await EmpModel.findByIdAndDelete(req.params.id);

  if (!deletedEmp) {
    return res.status(404).json({
      message: "Employee not found",
    });
  }

  res.status(200).json({
    message: "Employee deleted",
    payload: deletedEmp,
  });
});

