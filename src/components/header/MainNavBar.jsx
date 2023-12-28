
import React, { useState } from 'react';
import { Outlet, NavLink } from "react-router-dom";

import logo from "../../assets/img/logo.png"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State for mobile menu toggle

  const handleToggle = () => {
    setIsOpen(!isOpen); // Toggle mobile menu open/closed
  };

  return (
    <div className="bg-[#edeeef] max-w-full">
    <div className="container">
      <nav className="flex justify-between items-center text-white py-2 px-2 md:px-8">
        <a href="/" className="text-xl font-bold"><img className="w-20 h-10" src={logo} alt="" /></a>
        <ul
          className={
            isOpen
              ? "md:flex justify-end text-right space-x-4 md:space-x-8"
              : "hidden md:flex justify-end text-right space-x-4 md:space-x-8"
          }
        >
          <li>
            <NavLink className="text-[#007559] no-underline" to="/">Home</NavLink>
          </li>
          <li>
            <NavLink className="text-[#007559] no-underline" to="organisation">Our Organization</NavLink>
          </li>
          <li>
            <NavLink className="text-[#007559] no-underline" to="service">Our Service</NavLink>
          </li>
          <li>
            <NavLink className="text-[#007559] no-underline" to="contact">Contact Us</NavLink>
          </li>
          <li>
            <NavLink className="text-[#007559] no-underline" to="faq">FAQ</NavLink>
          </li>
        </ul>
        <button
          className="md:hidden focus:outline-none"
          onClick={handleToggle}
        >
          <svg
            className="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6L18 18"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6H20M4 12H20M4 18H20"
              />
            )}
          </svg>
        </button>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
    </div>);
};

export default Navbar;
