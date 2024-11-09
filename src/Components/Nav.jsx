import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div className="bg-body-tertiary">
      <ul className="nav container py-3 ">
        <li className="nav-item">
          <NavLink to="/" className="nav-link text-black fs-4">
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/about" className="nav-link text-black fs-4">
            About
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/services" className="nav-link text-black fs-4">
            Services
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/contact" className="nav-link text-black fs-4">
            Contact us
          </NavLink>
        </li>
        <div className="ms-auto">
          <form action="" className="d-inline search">
            <i class="fa-solid fa-magnifying-glass fs-4"></i>
          </form>
        </div>
      </ul>
    </div>
  );
};

export default Nav;
