
import { useLocation, useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import axios from "axios";

function EditEmployee() {
  const {
    register,
    handleSubmit,
    setValue,
  } = useForm();

  const navigate = useNavigate();
  const { state } = useLocation();

  useEffect(() => {
    if (state) {
      setValue("name", state.name);
      setValue("email", state.email);
      setValue("mobile", state.mobile);
      setValue("designation", state.designation);
      setValue("companyName", state.companyName);
    }
  }, [state, setValue]);

  // Save Modified Employee
  const saveModifiedEmp = async (modifiedEmp) => {
    try {
      const res = await axios.put(
        `https://atp-8.onrender.com/emp-api/employees/${state._id}`,
        modifiedEmp
      );

      if (res.status === 200) {
        navigate("/list");
      }
    } catch (err) {
      console.log("Error updating employee:", err);
    }
  };

  return (
    <div>
      <h1 className="text-center text-5xl text-blue-300">
        Update Employee
      </h1>

      <form
        className="mx-auto mt-10 max-w-md"
        onSubmit={handleSubmit(saveModifiedEmp)}
      >
        <input
          type="text"
          placeholder="Enter name"
          {...register("name")}
          className="mb-3 w-full rounded-2xl border-2 p-3"
        />

        <input
          type="email"
          placeholder="Enter email"
          {...register("email")}
          className="mb-3 w-full rounded-2xl border-2 p-3"
        />

        <input
          type="number"
          placeholder="Enter mobile number"
          {...register("mobile")}
          className="mb-3 w-full rounded-2xl border-2 p-3"
        />

        <input
          type="text"
          placeholder="Enter designation"
          {...register("designation")}
          className="mb-3 w-full rounded-2xl border-2 p-3"
        />

        <input
          type="text"
          placeholder="Enter company name"
          {...register("companyName")}
          className="mb-3 w-full rounded-2xl border-2 p-3"
        />

        <button
          type="submit"
          className="mx-auto block rounded-2xl bg-gray-600 p-4 text-2xl text-white"
        >
          Save
        </button>
      </form>
    </div>
  );
}

export default EditEmployee;

