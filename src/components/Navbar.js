import React from "react";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/" activeclassname="active">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" activeclassname="active">
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" activeclassname="active">
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink to="/categories" activeclassname="active">
            Categories
          </NavLink>
        </li>
        <li>
          <NavLink to="/login" activeclassname="active">
            Login
          </NavLink>
        </li>
        <li>
          <NavLink to="/register" activeclassname="active">
            Register
          </NavLink>
        </li>
        <li>
          <NavLink to="/dashboard" activeclassname="active">
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink to="/payments" activeclassname="active">
            Payments
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
