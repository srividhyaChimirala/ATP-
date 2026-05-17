import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/authStore";

export default function AdminProfile() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const logout = useAuth((state) => state.logout);
  const navigate = useNavigate();

  // Fetch users
  const fetchUsers = async () => {
    try {
      setLoading(true);
      const res = await axios.get("http://localhost:5000/admin-api/details", {
        withCredentials: true,
      });
      setUsers(res.data.payload);
      setError("");
    } catch (err) {
      setError("Failed to fetch users");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // Toggle status
  const toggleUserStatus = async (id, currentStatus) => {
    try {
      await axios.patch(
        `http://localhost:5000/admin-api/block/${id}`,
        { isUserActive: !currentStatus },
        { withCredentials: true }
      );
      fetchUsers();
    } catch (err) {
      setError("Failed to update user");
    }
  };

  // Logout
  const onLogout = async () => {
    await logout();
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-[#f5f5f7] p-8">
      
      {/* HEADER */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-[#1d1d1f]">
          Admin Dashboard
        </h1>

        <button
          className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-full text-sm transition"
          onClick={onLogout}
        >
          Logout
        </button>
      </div>

      {/* CARD */}
      <div className="bg-white rounded-3xl shadow-sm border border-[#e8e8ed] p-6">
        
        {loading && <p className="text-gray-500">Loading users...</p>}
        {error && <p className="text-red-500">{error}</p>}

        {!loading && users.length === 0 && (
          <p className="text-gray-500">No users found</p>
        )}

        {!loading && users.length > 0 && (
          <div className="overflow-x-auto">
            <table className="w-full">
              
              <thead>
                <tr className="text-left text-sm text-gray-500 border-b">
                  <th className="py-3">Email</th>
                  <th>Role</th>
                  <th>Status</th>
                  <th className="text-right">Action</th>
                </tr>
              </thead>

              <tbody>
                {users.map((u) => (
                  <tr
                    key={u._id}
                    className="border-b last:border-none hover:bg-gray-50 transition"
                  >
                    {/* EMAIL */}
                    <td className="py-4 font-medium text-[#1d1d1f]">
                      {u.email}
                    </td>

                    {/* ROLE BADGE */}
                    <td>
                      <span className="px-3 py-1 text-xs rounded-full bg-blue-100 text-blue-600">
                        {u.role}
                      </span>
                    </td>

                    {/* STATUS BADGE */}
                    <td>
                      <span
                        className={`px-3 py-1 text-xs rounded-full ${
                          u.isUserActive
                            ? "bg-green-100 text-green-600"
                            : "bg-red-100 text-red-600"
                        }`}
                      >
                        {u.isUserActive ? "Active" : "Blocked"}
                      </span>
                    </td>

                    {/* ACTION BUTTON */}
                    <td className="text-right">
                      <button
                        onClick={() =>
                          toggleUserStatus(u._id, u.isUserActive)
                        }
                        className={`px-4 py-1.5 text-xs rounded-full font-medium transition ${
                          u.isUserActive
                            ? "bg-red-500 hover:bg-red-600 text-white"
                            : "bg-green-500 hover:bg-green-600 text-white"
                        }`}
                      >
                        {u.isUserActive ? "Block" : "Activate"}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>

            </table>
          </div>
        )}
      </div>
    </div>
  );
}