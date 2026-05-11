import { NavLink } from "react-router";

function Header() {
  return (
    <nav className="flex justify-end gap-6 bg-blue-600 p-7 text-3xl text-white">
      <NavLink
        to=""
        className={({ isActive }) =>
          isActive ? "text-yellow-400" : ""
        }
      >
        Home
      </NavLink>

      <NavLink
        to="create-emp"
        className={({ isActive }) =>
          isActive ? "text-yellow-400" : ""
        }
      >
        Create Employee
      </NavLink>

      <NavLink
        to="list"
        className={({ isActive }) =>
          isActive ? "text-yellow-400" : ""
        }
      >
        List of Employees
      </NavLink>
    </nav>
  );
}

export default Header;
