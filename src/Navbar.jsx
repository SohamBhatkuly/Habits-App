import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navigation">
      <ul>
        <li>
          <NavLink
            to="/Home"
            className={({ isActive }) => (isActive ? "nv active" : "nv")}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/Community"
            className={({ isActive }) => (isActive ? "nv active" : "nv")}
          >
            Community
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/Profile"
            className={({ isActive }) => (isActive ? "nv active" : "nv")}
          >
            Profile
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/Dashboard"
            className={({ isActive }) => (isActive ? "nv active" : "nv")}
          >
            Dashboard
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
