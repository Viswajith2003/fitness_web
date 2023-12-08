import React, { useState } from "react";
import "../CSS/Navbar.css";
import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      <Link to="/" className="title">
        <h1 className="text-5xl font-bold ml-8">GET-SHAPE</h1>
      </Link>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <NavLink to="/">
            <h5 className="text-xl font-bold">Home</h5>
          </NavLink>
        </li>
        <li>
          <NavLink to="/exercise">
            <h5 className="text-xl font-bold">Exercise</h5>
          </NavLink>
        </li>
        <li>
          <NavLink to="/bmi">
            <h5 className="text-xl font-bold">BMI-calc</h5>
          </NavLink>
        </li>

        <li>
          <NavLink to="/contacts">
            <h5 className="text-xl font-bold">Contacts</h5>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
