import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Exercise", path: "/exercise" },
    { name: "BMI", path: "/bmi" },
    { name: "Contacts", path: "/contact" },
  ];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="bg-[#000000] text-white p-4 flex justify-between items-center container"
    >
      <Link to="/" className="text-4xl font-bold">
        GetShape
      </Link>
      <div className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
        <span className="block w-6 h-1 bg-white mb-1"></span>
        <span className="block w-6 h-1 bg-white mb-1"></span>
        <span className="block w-6 h-1 bg-white"></span>
      </div>
      <ul
        className={`md:flex md:items-center md:static absolute bg-[#000000] left-0 w-full md:w-auto transition-all duration-500 ease-in ${
          menuOpen ? "top-full" : "top-[-490px]"
        }`}
      >
        {navItems.map((item) => (
          <li key={item.name} className="md:ml-8 text-xl my-7 md:my-0">
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                `hover:text-gray-300 duration-500 ${
                  isActive ? "text-red-500" : "text-[#fe2020]"
                }`
              }
            >
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </motion.nav>
  );
};

export default Navbar;
