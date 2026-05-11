
import React from "react";
import { useLocation } from "react-router";

function Employee() {
  const { state } = useLocation();

  return (
    <div className="p-16 text-center text-2xl">
      <p>{state.name}</p>
      <p>{state.email}</p>
      <p>{state.mobile}</p>
      <p>{state.designation}</p>
      <p>{state.companyName}</p>
    </div>
  );
}

export default Employee;
