import { useForm } from "react-hook-form";
import { useState } from "react";
import { useNavigate } from "react-router";

function CreateEmp() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Form Submit
  const onFormSubmit = async (newEmpObj) => {
    try {
      setLoading(true);
//http://localhost:4000/emp-api/employees
      // Make HTTP POST request
      const res = await fetch("https://atp-8.onrender.com/emp-api/employees", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newEmpObj),
      });

      if (res.status === 201) {
        // Navigate to employee list
        navigate("/list");
      } else {
        const errorRes = await res.json();

        console.log("Error response is:", errorRes);

        throw new Error(errorRes.reason);
      }
    } catch (err) {
      console.log("Error in catch:", err);

      // Handle error
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  console.log(error);

  if (loading) {
    return <p className="text-center text-4xl">Loading....</p>;
  }

  if (error) {
    return (
      <p className="text-center text-3xl text-red-500">
        {error}
      </p>
    );
  }

  return (
    <div>
      <h1 className="text-center text-5xl text-blue-300">
        Create New Employee
      </h1>

      {/* Form */}
      <form
        className="max-w-md mx-auto mt-10"
        onSubmit={handleSubmit(onFormSubmit)}
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
          Add Employee
        </button>
      </form>
    </div>
  );
}

export default CreateEmp;
