// import React from 'react'

// const MainNavBar = () => {
//   return (
//     <div>Yes</div>
//   );
// }

// export default MainNavBar

import React, { useState } from 'react';
// import "../../assets/Style.css"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State for mobile menu toggle

  const handleToggle = () => {
    setIsOpen(!isOpen); // Toggle mobile menu open/closed
  };

  return (
    <div className="bgColor">
    <nav className="flex justify-between bg-primar items-center text-white py-4 px-4 md:px-8">
    <a href="/" className="text-xl font-bold">My Website</a>
    <ul
      className={
        isOpen
          ? "md:flex justify-end text-right space-x-4 md:space-x-8"
          : "hidden md:flex justify-end text-right space-x-4 md:space-x-8"
      }
    >
      <li>
        <a className="" href="/">Home</a>
      </li>
      <li>
        <a className='' href="/">Our Organization</a>
      </li>
      <li>
        <a href="/">Our Service</a>
      </li>
      <li>
        <a href="/">Contact Us</a>
      </li>
      <li>
        <a href="/">FAQ</a>
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
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6L18 18"
          />
        ) : (
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6H20M4 12H20M4 18H20"
          />
        )}
      </svg>
    </button>
  </nav>
    </div>);
};

export default Navbar;
