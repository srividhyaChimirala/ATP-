
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";

function ListOfEmps() {
  const [emps, setEmps] = useState([]);
  const navigate = useNavigate();

  const gotoEmployee = (empObj) => {
    navigate("/employee", { state: empObj });
  };

  const gotoEditEmployee = (empObj) => {
    navigate("/edit-emp", { state: empObj });
  };

  const deleteEmployeeById = async (id) => {
    const res = await axios.delete(
      `http://atp-8.onrender.com/emp-api/employees/${id}`
    );

    if (res.status === 200) {
      getEmps();
    }
  };

  async function getEmps() {
    const res = await fetch(
      "http://atp-8.onrender.com/emp-api/employees",
      {
        method: "GET",
      }
    );

    if (res.status === 200) {
      const resObj = await res.json();
      setEmps(resObj.payload);
    }
  }

  useEffect(() => {
    getEmps();
  }, []);

  return (
    <div className="p-5">
      <h1 className="text-4xl text-center mb-10">
        List of Employees
      </h1>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {emps.map((empObj) => (
          <div
            key={empObj._id}
            className="bg-white p-5 shadow-lg rounded-2xl"
          >
            <p className="text-2xl mb-2">{empObj.name}</p>

            <p className="text-lg text-gray-600 mb-5">
              {empObj.email}
            </p>

            <div className="flex justify-around">
              <button
                onClick={() => gotoEmployee(empObj)}
                className="bg-green-400 px-4 py-2 rounded-xl text-white"
              >
                View
              </button>

              <button
                onClick={() => gotoEditEmployee(empObj)}
                className="bg-yellow-400 px-4 py-2 rounded-xl text-white"
              >
                Edit
              </button>

              <button
                onClick={() => deleteEmployeeById(empObj._id)}
                className="bg-red-400 px-4 py-2 rounded-xl text-white"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ListOfEmps;

// Navigate to /employee along with selected employee object

