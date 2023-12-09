import React, { useState } from "react";
import "../CSS/Navbar.css";
import { Link, NavLink } from "react-router-dom";
import { motion } from "framer-motion";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0}}
      transition={{ duration: 1 }}
    >
      <Link to="/" className="title">
        <h1 className="text-5xl font-bold ml-8">GetShape</h1>
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
    </motion.nav>
  );
};
